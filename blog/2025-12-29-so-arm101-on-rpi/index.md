---
slug: rpi lerobot so-arm101 teleoperate
title: Teleoperation of SO-ARM101 on rpi 3B+ as a service
authors: [boris]
tags: [rpi, raspbery Pi, linux, lerobot, so-arm101, so-arm, robotics, systemd, udev]
---

Goal of this project:  
When the rpi boots up, the teleoperation of arms to be activated shortly
{/* truncate */}
## Lab setup

In the beginning I had a lot of issues with the rpi recognising the usb boards of the arms, one of them, sometimes both, 
had problems connecting as a usb device, asked the GPT of course. It was a power issue concerning both the pi itself and the boards, so I connected an external powered usb hub and everything was fine.  
The main flaw of this lab setup is the number of power outlets I needed. Everything was 5V but I had no strong power supply onboard, so I used power adapter for each device, 4 in total.

```
         ┌──────────────────────┐                                  
         │   Bus Servo Driver   │                                  
         │        board         │                                  
         │      follower        ┼──────┐                           
         └──────────────────────┘      │   usb    ┌─────────┐      
         ┌─────────┐                   └──────────┼         │      
         │ext.power│                              │         │      
         └─────────┘                              │   USB   ┼─────┐
                                           usb    │   hub   │     │
         ┌──────────────────────┐      ┌──────────┤         │     │
         │   Bus Servo Driver   │      │          └─────────┘     │
         │        board         │      │          ┌─────────┐     │
         │      follower        ┼──────┘          │ext.power│     │
         └──────────────────────┘                 └─────────┘     │
         ┌─────────┐                                              │
         │ext.power│                                              │
         └─────────┘                                              │
                                                                  │
         ┌──────────────────────────────────────────────────┐     │
         │                                           ┌──────┐ usb │
         │                                           │      ┼─────┘
         │                                           │      │      
         │                                           └──────┘      
         ┌┐                                          ┌──────┐      
         ││            RPI 3B+                       │      │      
         ││                                          │      │      
         └┘                                          └──────┘      
         │                                           ┌──────┐      
         │                                           │      │      
         │                                           │      │      
         │    ┌───┐                                  └──────┘      
         └────└───┘─────────────────────────────────────────┘      
         ┌─────────┐                                               
         │ext.power│                                               
         └─────────┘                                               
```

## Installation of lerobot on the rpi
Following the [official guide for the installation](https://huggingface.co/docs/lerobot/installation)  of the project  
I encountered issues with the free space while installing one of the dependencies `OSError: [Errno 28] No space left on device`. It was the `/tmp` folder, 
it had only 454MB of free space . It turned out that `/tmp` is a `tmpfs` (RAM-backed filesystem) limited to ~454 MB
``` shell
Filesystem      Size  Used Avail Use% Mounted on
udev            317M     0  317M   0% /dev
tmpfs           182M  4.1M  178M   3% /run
/dev/mmcblk0p2   29G  7.4G   20G  27% /
tmpfs           454M     0  454M   0% /dev/shm
tmpfs           5.0M   12K  5.0M   1% /run/lock
tmpfs           1.0M     0  1.0M   0% /run/credentials/systemd-journald.service
// highlight-start
tmpfs           454M     0  454M   0% /tmp
// highlight-end
/dev/mmcblk0p1  510M   74M  437M  15% /boot/firmware
tmpfs           1.0M     0  1.0M   0% /run/credentials/getty@tty1.service
tmpfs           1.0M     0  1.0M   0% /run/credentials/serial-getty@ttyS0.service
tmpfs            91M  8.0K   91M   1% /run/user/1000
```
So before installing the pip packages `pip install -e .` I created a tmp directory 
``` bash
mkdir -p ~/pip-tmp
``` 
and after that 
``` bash
TMPDIR=~/pip-tmp pip install -e .
```
## Calibration of the arms
The motor IDs were set before, but I did not have the calibration configurations `~/.cache/huggingface/lerobot/calibration/robots/so101_follower/red_sting.json` and `~/.cache/huggingface/lerobot/calibration/teleoperators/so101_leader/gray_hound.json` so I made the calibration again following the [official guide](https://huggingface.co/docs/lerobot/so101#calibrate) but this time with the API.  
First run the _isolated Python environment_
```bash 
conda activate lerobot
```
and then run the script for each robot:
```python title="follower"
from lerobot.robots.so101_follower import SO101FollowerConfig, SO101Follower

config = SO101FollowerConfig(
    port="/dev/ttyUSB_follower_arm",
    id="red_sting",
)

follower = SO101Follower(config)
follower.connect(calibrate=False)
follower.calibrate()
follower.disconnect()
```

```python title="leader"
from lerobot.teleoperators.so101_leader import SO101LeaderConfig, SO101Leader

config = SO101LeaderConfig(
    port="/dev/ttyUSB_leader_arm",
    id="gray_hound",
)

leader = SO101Leader(config)
leader.connect(calibrate=False)
leader.calibrate()
leader.disconnect()
```
## Initial test of teleoperation

When calibrated it was time to test the teleoperation, so under the isolated Python environment I run this script:
```python title="teleoperate.py"
from lerobot.teleoperators.so101_leader import SO101LeaderConfig, SO101Leader
from lerobot.robots.so101_follower import SO101FollowerConfig, SO101Follower

robot_config = SO101FollowerConfig(
    port="/dev/ttyUSB_follower_arm",
    id="red_sting",
)

teleop_config = SO101LeaderConfig(
    port="/dev/ttyUSB_leader_arm",
    id="gray_hound",
)

robot = SO101Follower(robot_config)
teleop_device = SO101Leader(teleop_config)
robot.connect()
teleop_device.connect()

while True:
    action = teleop_device.get_action()
    robot.send_action(action)
```
I confirmed that everything is okay and proceeded to the automation itself

## Make the usb boards (follower, leader arms) distinguishable, udev rules
First I had to be sure that the USB devices had the same name each time they were plugged into the USB bus. Most of the time they had `/dev/ttyACM1` file names, ranging from 0-5. That meant it was not sure that `/dev/ttyACM0` is the follower, it could be the leader arm.  
One way to distinguish a device is to use the VID and PID listed from `lsusb` but in this case they were the same:
```
Bus 001 Device 061: ID 1a86:55d3 QinHeng Electronics USB Single Serial
Bus 001 Device 062: ID 1a86:55d3 QinHeng Electronics USB Single Serial
```
Another way is to bind it to the specific usb port, but it was not okay, so I used the `udevadm info` to check the serial ID of each chip inside. One by one knowing for sure that `/dev/ttyACM0` is the correct arm, I found the `ATTRS{serial}` of each motor driver PCB:

```
udevadm info -a /dev/ttyACM2 | grep -i serial
    ATTRS{product}=="USB Single Serial"
    // highlight-start
    ATTRS{serial}=="5AB9067929"
    // highlight-end
    ATTRS{serial}=="3f980000.usb"
udevadm info -a /dev/ttyACM3 | grep -i serial
    ATTRS{product}=="USB Single Serial"
    ATTRS{serial}=="5AB9067722"
    ATTRS{serial}=="3f980000.usb"    
```
Then I created a ___udev rule___ and placed that rule in `/etc/udev/rules.d/`
``` shell title="98-LeRobot.rules"
SUBSYSTEM=="tty", ATTRS{serial}=="5AB9067722", SYMLINK+="ttyUSB_follower_arm"
SUBSYSTEM=="tty", ATTRS{serial}=="5AB9067929", SYMLINK+="ttyUSB_leader_arm"
```
With these rules in place I run the following commands to reload and trigger the new rules
```
sudo udevadm control --reload  
sudo udevadm trigger
```   

## Prepare the shell script
Prior to creating the project running as a service I had to create and test the `autoTeleoperation.sh` script. The script checks for the existance of the files `/dev/ttyUSB_follower_arm` and ` /dev/ttyUSB_leader_arm`, if so activates the isolated python environment and runs the python script `teleoperate.py`
```
#!/bin/bash
set -e #exit on error

CONDA_BASE="/home/boris/opt/miniforge3"
ENV_NAME="lerobot"
SCRIPT="/home/boris/teleoperate.py"


echo "Waiting for USB devices..."

# -e checks if file exists
while [ ! -e /dev/ttyUSB_follower_arm ] || [ ! -e /dev/ttyUSB_leader_arm ]; do
    sleep 2
done

# Activate conda
source "$CONDA_BASE/etc/profile.d/conda.sh"
conda activate "$ENV_NAME"

echo "Starting Teleoperation!"
# Run python script
exec python "$SCRIPT"
```
## Create the daemon

After the test of the shell script it was timi to create the  service itself  
TODO: where it must be, how to load it, how to use journalctl -u to check for logs

```shell title="lerobot.service"
[Unit]
Description=LeRobot startup service
After=network.target
Wants=network.target

[Service]
Type=simple
User=boris
WorkingDirectory=/home/boris/lerobot
ExecStart=/home/boris/autoTeleoperate.sh
Restart=always
RestartSec=20
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```


## References 
