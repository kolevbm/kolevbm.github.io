---
sidebar_label: "browser-snap issue, Jetpack 6.2.1"
sidebar_position: 1
displayed_sidebar: nvidiaSidebar
---


# Jetson orin nano kernal customization image build and flash on target

## Introduction

The goal of this writing is to clarify for myself how to do the Permanent kernel-build fix for the [browser issue and the snap update](https://jetsonhacks.com/2025/07/12/why-chromium-suddenly-broke-on-jetson-orin-and-how-to-bring-it-back/)

# Before you begin

- You have installed SDKManager and at least once flashed the board with it.  
    this assures that the nvidia_sdk and Linux for Tegra is downloaded.
- find the OS release notes for the current Jetpack Release. In the case of writing I am using [JetPack 6.2.1](https://docs.nvidia.com/jetson/jetpack/release-notes/index.html) which is with OS **L4T 36.4.4** chek the [release notes](https://docs.nvidia.com/jetson/archives/r36.4.4/ReleaseNotes/Jetson_Linux_Release_Notes_r36.4.4.pdf), from there you can find the *toolchain* and the *Release Tag*
- [NVIDIA Jetson docs for r36.4.4](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html) the main source of information for how things are done
- keep in mind that the you will export environment variables and they will be available for the current shell (?and subshells) unless added in .bashrc, hence when you start don't close the terminal you are working in

# Kernel customization

[source of information](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Kernel/KernelCustomization.html)

## \[0\] Download and install the Toolchain

[source of information](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/AT/JetsonLinuxToolchain.html#at-jetsonlinuxtoolchain)  
when you download and extract the tool chain export the CROSS_COMPILE variable for the current shell

```bash
export CROSS_COMPILE=$HOME/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

## \[1\] Sync the kernel source with Git

You have to run the `source_sync.sh` script to get the kernel source

```bash
cd <install-path>/Linux_for_Tegra/source
./source_sync.sh -k -t <release-tag>
```

- in my case &lt;install-path&gt; is : `~/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra/source`
- &lt;release tag&gt; obtained from the OS release: `jetson_36.4.4`

```
./source_sync.sh -k -t jetson_36.4.4
```

## \[2\] Customize the Kernel

- go to the correct folder

```bash
cd ~/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra/source/kernel/kernel-jammy-src/arch/arm64/configs
```

- create a copy of defconfig defconfig.bak instead of make menuconfig

```bash
cp defconfig defconfig.bak
```

- make the following changes:
    - `CONFIG_LOCALVERSION="-snap"`
    - `CONFIG_SQUASHFS_XATTR=y`
    - `CONFIG_SECURITY_APPARMOR=y`
- show the changes

```bash
$ diff defconfig defconfig.bak 
2d1
< CONFIG_LOCALVERSION="-snap"
1290d1288
< CONFIG_SQUASHFS_XATTR=y
1313d1310
< CONFIG_SECURITY_APPARMOR=y
```

TODO:

- notes about Makefile in upper kenrel-jammy-src directory

## \[3\] Build the Jetson Linux kernel and its in-tree modules

go to the correct folder where the Makefile is and build it with make

```bash
export CROSS_COMPILE=<toolchain-path>/bin/aarch64-buildroot-linux-gnu-
make ARCH=arm64 -C kernel
```

note here `-C` means go inside folder `kernel`

## \[4\] Install the kernel and in-tree modules

```bash
export INSTALL_MOD_PATH=<install-path>/Linux_for_Tegra/rootfs/
sudo -E make ARCH=arm64 install -C kernel
cp kernel/kernel-jammy-src/arch/arm64/boot/Image \
  <install-path>/Linux_for_Tegra/kernel/Image
```

## \[5\] Building the NVIDIA Out-of-Tree Modules

- goto :

```bash
cd <install-path>/Linux_for_Tegra/source
```

- build:

```bash
export CROSS_COMPILE=<toolchain-path>/bin/aarch64-buildroot-linux-gnu-
export KERNEL_HEADERS=$PWD/kernel/kernel-jammy-src
make modules
```

- install:

```bash
export INSTALL_MOD_PATH=<install-path>/Linux_for_Tegra/rootfs/
sudo -E make modules_install
```

- update the intramfs:

```bash
cd <install-path>/Linux_for_Tegra
sudo ./tools/l4t_update_initrd.sh
```

* * *

After the modules are installed and the kernel Image is copied to Linux_for_Tegra/kernel/
We can proceed to flashing the image

# Flashing the device with new kernel

## Put your Jetson developer kit into Force Recovery Mode

For the Jetson Orin Nano developer kit:

1.  Disconnect the power cable to ensure that the developer kit is powered off.
2.  Place a jumper to short the **FC REC** and **GND** pins on the 12-pin button header.
3.  Reconnect the power cable.

[confirm that the board is in recovery mode](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html#to-determine-whether-the-developer-kit-is-in-force-recovery-mode)

## Flash via USB

Jetson Orin Nano Developer Kit with Super Configuration (NVMe) :

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

# Finishing the installation on the device and final steps
You have to finish the installation of the OS (username password etc.) on the jetson itself so grab a keyboard and a mouse and connect the board to a monitor via DisplayPort cable. 

After you are ready edit the `/boot/extlinux/extlinux.conf ` and APPEND 
- apparmor=1 security=apparmor

Restart and try to install firefox or chromium via `apt-get install`

Note: I wanted to install from software gui but it did not loaded the first time, after that I installed firefox from the terminal, expirienced some delay because of snapd autostart, but after a while the browser was installed.