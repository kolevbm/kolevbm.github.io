---
slug: reverse ssh
title: Reverse ssh
authors: [boris]
tags: [rpi, raspbery Pi, linux, ssh, reverse-ssh, virtual box, forwarding, routing]
---

## Goal of this project:  
What is reverse ssh and how to implement it?
There are lots of articles about it [like this one](https://jfrog.com/blog/reverse-ssh-tunneling-from-start-to-end/) I won'to go into details.   
The core idea is to make ssh connection from a device with dynamic public IP(behind NAT) to a server with a static IP you have access to. With this reverse ssh connection (device to server) and forwarding enabled on the server, you can ssh to the device by ssh connection to a specified port on the server. This way the connection is directly forwarded to the remote device.   
```bash title="Reverse SSH"
# inside device behind NAT
ssh -R 2222:localhost:22 user@jump-host-server
```
```bash title="Temporary forwarding"
# inside jump-host-server
sudo sysctl -w net.ipv4.ip_forward=1
```
```bash title="connecting from PC to remote device using the reverse tunnel created between device-server"
# inside your host PC
# use the login credentials for remote device
ssh -p 2222 user@jump-host-server
```
:::note
It is advised to use wireguard, or zerotier for such connections
:::

- [Lab setup](#lab-setup)
- [ssh](#ssh)
- [Reverse ssh](#reverse-ssh)
- [Remote machine configuration](#remote-machine-configuration)
- [Jump host configuration](#jump-host-configuration)
- [Reverse ssh as a service](#reverse-ssh-as-a-service)
- [References](#references)

{/* truncate */}

## Lab setup

There are three machines. The Host PC(my laptop) and two virtual machines running on it:   
1. Host machine (windows PC)
2. Jump host (linux virutual machine as server with public static IP)
    - two NICs
        1. Host-Only-Adapter
        2. Internal network ("ot-network") 
3. Remote Machine (linux virtual machine as remote device)
    - one NIC:
        1. Internal network ("ot-network")
        
## Remote Machine configuration
The remote device initiates a connection to the jump host server:
```bash
ssh -R 2222:localhost:22 user@jump-host-server
```
`-R` = remote portforward   
`2222` = the port that will be opened on the jump host server      
`localhost:22` = remote machine forwards to its own local SSH   

This creates a tunnel: connections to `jump-host:2222` get forwarded backward through the tunnel to `remote-device:22`


## Jump host configuration
```bash title="Temporary forwarding"
sudo sysctl -w net.ipv4.ip_forward=1
```
To make it last during reboots go to `/etc/sysctl.conf` and uncomment or append
```bash title="/etc/sysctl.conf"
net.ipv4.ip_forward=1
```
```bash title="apply instantly"
sudo sysctl -p
```

```bash title="quick check"
cat /proc/sys/net/ipv4/ip_forward
```
It should return 1

## Reverse ssh as a service
You have to create ssh-key with no passphrase on the remote device and copy this ssh-key on the jump-host server before creating a daemon.
```bash title="generate ssh key"
ssh-keygen
```
```bash title="copy ssh key to remote host"
ssh-copy-id user@jump-host-server
```
```bash 
sudo vi /etc/systemd/system/reverse-tunnel.service
```
```bash title="reverse-tunnel.service"
[Unit]
Description=Reverse SSH tunnel to Jump-VM
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=user
ExecStart=/usr/bin/ssh -i /home/user/.ssh/id_ed25519\
  -N -R 2020:localhost:22 \
  -o ServerAliveInterval=30 \
  -o ServerAliveCountMax=3 \
  -o ExitOnForwardFailure=yes \
  -o StrictHostKeyChecking=accept-new \
  user@<public-ip-jump-host>
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```
## References