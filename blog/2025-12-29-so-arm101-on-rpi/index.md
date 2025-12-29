---
slug: rpi lerobot so-arm101 teleoperate
title: Teleoperation of SO-ARM101 on rpi 3B+ as a service
authors: [boris]
tags: [rpi, raspbery Pi, linux, lerobot, so-arm101, so-arm, robotics, systemd, udev]
---

Goal of this project: automate the start process for teleoperation of so-arm101 follower and leader arms on a raspberry pi model 3B+

## Lab setup

In the beginning I had a lot of issues with the rpi recognising the usb boards of the arms, one of them or both of them 
had problems connecting as a usb device, asked the GPT of course. It was a power issue concerning both the pi itself and the boards, so I connected an external powered usb hub and everything was fine.  
The main flaw of this lab setup is the number of power outlets I needed. Everything was 5V but I had no power supply onboard so I used power adapter for each device, 4 in total.

## Installation of lerobot on the rpi
I followed the official guide for the installation of the project  
I encountered issues with the free space while installing one of the dependencies. It was the `/tmp` folder it had only 454MB of free space `OSError: [Errno 28] No space left on device`. It turned out that `/tmp` is a `tmpfs` (RAM-backed filesystem) limited to ~454 MB
``` shell
Filesystem      Size  Used Avail Use% Mounted on
udev            317M     0  317M   0% /dev
tmpfs           182M  4.1M  178M   3% /run
/dev/mmcblk0p2   29G  7.4G   20G  27% /
tmpfs           454M     0  454M   0% /dev/shm
tmpfs           5.0M   12K  5.0M   1% /run/lock
tmpfs           1.0M     0  1.0M   0% /run/credentials/systemd-journald.service
tmpfs           454M     0  454M   0% /tmp
/dev/mmcblk0p1  510M   74M  437M  15% /boot/firmware
tmpfs           1.0M     0  1.0M   0% /run/credentials/getty@tty1.service
tmpfs           1.0M     0  1.0M   0% /run/credentials/serial-getty@ttyS0.service
tmpfs            91M  8.0K   91M   1% /run/user/1000

```

## Calibration of the arms

## Initial test of teleoperation

## Make the usb boards (follower, leader arms) distinguishable, udev rules

## Prepare the shell script

## Create the daemon

## References 
