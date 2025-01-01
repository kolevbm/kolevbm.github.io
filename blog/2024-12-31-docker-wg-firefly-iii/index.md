---
slug: docker-wg-firefly-iii
title: Docker compose for Firefly III with WireGuard VPN client
authors: [boris]
tags: [docker, finance, firefly, wg, wireguard]
---

Записах си [firefly-iii](https://www.firefly-iii.org/) в docker контейнер на локален сървър Raspberry Pi5, но исках да имам достъп до приложението навсякъде, а не само в домашната мрежа.
За целта направих docker-compose файл, който:

- създава контейнер с [firefly-iii](https://www.firefly-iii.org/) и другите необходими за него контейнери
- създава контейнер с [linuxserver/wireguard](https://github.com/linuxserver/docker-wireguard) VPN настроен като клиент, който се свързва към личен wireguard VPN сървър инсталиран на Mikrotik рутер в друга мрежа със статичен публичен адрес.
- свързва контейнерите в обща изолирана мрежа със статични IP адреси.
- пренасочване на портове от VPN контейнера към контейнера с _firefly-iii_.

Но разбира се това не беше достатъчно, за да имам връзка към _firefly-iii_ извън локална мрежа в дома ми.
<!-- truncate -->

## WireGuard VPN

За целта трябваше да се направят пренасочвания на портове в контейнера с _wireguard_. Тези пренасочвания лесно могат да се добавят и през
конфигурационния файл `wg0.conf` чрез `PostUp` и `PostDown` команди.

### Стъпка 1 генериране на ключове за _wireguard_ контейнера

За `linux` дистрибуции, които са с `kernel` версия `5.6+` може да се използва `wireguard` модула, който е включен в ядрото по подразбиране. Няма нужда от инсталиране на `wireguard-tools` или други пакети.

```bash title="Generate keys for wireguard container"
 wg genkey | tee privatekey | wg pubkey > publickey
```

:::important
тези файлове трябва да са в директорията `./config` която после ще се мапне към контейнера с _wireguard_
:::

:::note
The tee command in Linux reads input from standard input (stdin) and writes it to both standard output (stdout) and one or more specified files. It essentially "splits" the output, allowing it to be displayed on the terminal and saved to a file simultaneously.
:::

#### Стъпка 1.1  задаване на права за private key файла

```bash title="Set permissions for the private key file"
chmod 600 privatekey
```
4+2 = 6 (read and write for the owner)
0 (no permissions for the group)
0 (no permissions for others)

### Стъпка 2 създаване на конфигурационен файл за _wireguard_ контейнера

```conf title="wg0.conf"
[Interface]
PrivateKey = <container_private_key>
Address = 192.168.100.4/24
DNS = 192.168.100.1

PostUp = iptables -t nat -A PREROUTING -i %i -p tcp --dport 80 -j DNAT --to-destination 192.168.200.4:8080; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -t nat -D PREROUTING -i %i -p tcp --dport 80 -j DNAT --to-destination 192.168.200.4:8080; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
PublicKey = <server_public_key>
AllowedIPs = 0.0.0.0/0
Endpoint = <server_ip>:<server_port>
PersistentKeepalive = 50
```
 - в случая пренасочваме 192.168.100.4:80 _wireguard_ (wg0_interfece) към 192.168.200.4:8080 _firefly-iii_:
`iptables -t nat -A PREROUTING -i %i -p tcp --dport 80 -j DNAT --to-destination 192.168.200.4:8080`
 - след това маскираме пакетите, които преминават през интерфейса `eth0` на контейнера с _wireguard_:
`iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`

 > използваме `%i` за името на интерфейса, което ще бъде заменено автоматично от _wireguard_.

:::tip
трябва да се добави в `/etc/sysctl.conf`: 
`net.ipv4.ip_forward=1` за да позвволим пренасочването на портове, в случая това се прави в `docker-compose` файлa
:::

### Стъпка 3 добавяне на нов пиър peer към _wireguard_ сървъра

Тези настройки в моя случай са през микотрик рутера, които няма да описвам. Тук можете да намерите информация за това как се прави: [WireGuard VPN Server on MikroTik](https://help.mikrotik.com/docs/spaces/ROS/pages/69664792/WireGuard)


### Стъпка 4 стартиране на _wireguard_ тестови контейнер

Целта на тази стъпка е да се тества дали _wireguard_ контейнера може да се свърже към _wireguard_ сървъра.

```yaml title="wg-test-compose.yml"
services:
  wireguard:
    image: lscr.io/linuxserver/wireguard:latest         #should retrieve the correct image for your arch
    container_name: wireguard
    cap_add:
      - NET_ADMIN
      - SYS_MODULE #optional Some hosts may not load the iptables kernel modules by default
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      #- SERVERURL=wireguard.domain.com #optional
      #- SERVERPORT=51820 #optional
      #- PEERS=1 #optional
      #- PEERDNS=auto #optional
      #- INTERNAL_SUBNET=10.13.13.0 #optional
      #- ALLOWEDIPS=0.0.0.0/0 #optional
      #- PERSISTENTKEEPALIVE_PEERS= #optional
      - LOG_CONFS=true #optional
    volumes:
      - ./config:/config
      - /lib/modules:/lib/modules #optional if SYS_MODULE is set
    ports:
      - 51820:51820/udp
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
      - net.ipv4.ip_forward=1
    restart: unless-stopped

```
може да стартираме контейнера с
`docker compose -f wg-test-compose.yml up `

:::tip
при успешно стартиран контейнер може да влезете в него с `docker exec -it wireguard /bin/bash` и да пингнете wireguard сървъра с `ping <server_ip>`  или друга машина в мрежата на сървъра.
:::
след като всичко работи може да изтриете контейнера с `docker compose -f wg-test-compose.yml down` и да преминете към следващия етап

## Docker compose

За допълнителна информация как се настройва _firefly-iii_ в docker контейнер може да прочетете тук: [Firefly III Docker](https://docs.firefly-iii.org/how-to/firefly-iii/installation/docker/)

Целият docker-compose файл изглежда така:

```yaml title="docker-compose.yml"
services:
  wireguard:
    image: lscr.io/linuxserver/wireguard:latest         #should retrieve the correct image for your arch
    container_name: wireguard
    networks:
      wg_network:
        ipv4_address: 192.168.200.2
    cap_add:
      - NET_ADMIN
      - SYS_MODULE #optional Some hosts may not load the iptables kernel modules by default
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      #- SERVERURL=wireguard.domain.com #optional
      #- SERVERPORT=51820 #optional
      #- PEERS=1 #optional
      #- PEERDNS=auto #optional
      #- INTERNAL_SUBNET=10.13.13.0 #optional
      #- ALLOWEDIPS=0.0.0.0/0 #optional
      #- PERSISTENTKEEPALIVE_PEERS= #optional
      - LOG_CONFS=true #optional
    volumes:
      - ./config:/config
      - /lib/modules:/lib/modules #optional if SYS_MODULE is set
    ports:
      - 51820:51820/udp
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
      - net.ipv4.ip_forward=1
    restart: unless-stopped

  app:
    image: fireflyiii/core:latest
    hostname: app
    container_name: firefly_iii_core
    restart: always
    volumes:
      - firefly_iii_upload:/var/www/html/storage/upload
    env_file: .env
    networks:
      wg_network:
        ipv4_address: 192.168.200.4
    ports:
      - 85:8080
    depends_on:
      - db
  db:
    image: mariadb:lts
    hostname: db
    container_name: firefly_iii_db
    restart: always
    env_file: .db.env
    networks:
      wg_network:
        ipv4_address: 192.168.200.3
    volumes:
      - firefly_iii_db:/var/lib/mysql
  cron:
    #
    # To make this work, set STATIC_CRON_TOKEN in your .env file or as an environment variable and replace REPLACEME below
    # The STATIC_CRON_TOKEN must be *exactly* 32 characters long
    #
    image: alpine
    restart: always
    container_name: firefly_iii_cron
    command: sh -c "echo \"0 3 * * * wget -qO- http://app:8080/api/v1/cron/REPLACEME;echo\" | crontab - && crond -f -L /dev/stdout"
    networks:
      wg_network:
        ipv4_address: 192.168.200.5

volumes:
   firefly_iii_upload:
   firefly_iii_db:

networks:
  wg_network:
    driver: bridge
    ipam:
      config:
        - subnet: 192.168.200.0/24
```




