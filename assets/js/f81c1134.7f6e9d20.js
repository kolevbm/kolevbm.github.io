"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"docker-wg-firefly-iii","metadata":{"permalink":"/blog/docker-wg-firefly-iii","source":"@site/blog/2024-12-31-docker-wg-firefly-iii/index.md","title":"Docker compose for Firefly III with WireGuard VPN client","description":"\u0417\u0430\u043f\u0438\u0441\u0430\u0445 \u0441\u0438 firefly-iii \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u0435\u043d \u0441\u044a\u0440\u0432\u044a\u0440 Raspberry Pi5, \u043d\u043e \u0438\u0441\u043a\u0430\u0445 \u0434\u0430 \u0438\u043c\u0430\u043c \u0434\u043e\u0441\u0442\u044a\u043f \u0434\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430\u0432\u0441\u044f\u043a\u044a\u0434\u0435, \u0430 \u043d\u0435 \u0441\u0430\u043c\u043e \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0430\u0442\u0430 \u043c\u0440\u0435\u0436\u0430.","date":"2024-12-31T00:00:00.000Z","tags":[{"inline":true,"label":"docker","permalink":"/blog/tags/docker"},{"inline":true,"label":"finance","permalink":"/blog/tags/finance"},{"inline":true,"label":"firefly","permalink":"/blog/tags/firefly"},{"inline":true,"label":"wg","permalink":"/blog/tags/wg"},{"inline":true,"label":"wireguard","permalink":"/blog/tags/wireguard"}],"readingTime":4.635,"hasTruncateMarker":true,"authors":[{"name":"Boris Kolev","title":"owner","key":"boris","page":null}],"frontMatter":{"slug":"docker-wg-firefly-iii","title":"Docker compose for Firefly III with WireGuard VPN client","authors":["boris"],"tags":["docker","finance","firefly","wg","wireguard"]},"unlisted":false,"nextItem":{"title":"Regex MDbus LOG file with node.js","permalink":"/blog/regex"}},"content":"\u0417\u0430\u043f\u0438\u0441\u0430\u0445 \u0441\u0438 [firefly-iii](https://www.firefly-iii.org/) \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u0435\u043d \u0441\u044a\u0440\u0432\u044a\u0440 Raspberry Pi5, \u043d\u043e \u0438\u0441\u043a\u0430\u0445 \u0434\u0430 \u0438\u043c\u0430\u043c \u0434\u043e\u0441\u0442\u044a\u043f \u0434\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430\u0432\u0441\u044f\u043a\u044a\u0434\u0435, \u0430 \u043d\u0435 \u0441\u0430\u043c\u043e \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0430\u0442\u0430 \u043c\u0440\u0435\u0436\u0430.\\r\\n\u0417\u0430 \u0446\u0435\u043b\u0442\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0445 docker-compose \u0444\u0430\u0439\u043b, \u043a\u043e\u0439\u0442\u043e:\\r\\n\\r\\n- \u0441\u044a\u0437\u0434\u0430\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 [firefly-iii](https://www.firefly-iii.org/) \u0438 \u0434\u0440\u0443\u0433\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0438 \u0437\u0430 \u043d\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\\r\\n- \u0441\u044a\u0437\u0434\u0430\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 [linuxserver/wireguard](https://github.com/linuxserver/docker-wireguard) VPN \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u043a\u0430\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442, \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u0441\u0432\u044a\u0440\u0437\u0432\u0430 \u043a\u044a\u043c \u043b\u0438\u0447\u0435\u043d wireguard VPN \u0441\u044a\u0440\u0432\u044a\u0440 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u043d \u043d\u0430 Mikrotik \u0440\u0443\u0442\u0435\u0440 \u0432 \u0434\u0440\u0443\u0433\u0430 \u043c\u0440\u0435\u0436\u0430 \u0441\u044a\u0441 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u043d \u043f\u0443\u0431\u043b\u0438\u0447\u0435\u043d \u0430\u0434\u0440\u0435\u0441.\\r\\n- \u0441\u0432\u044a\u0440\u0437\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0442\u0435 \u0432 \u043e\u0431\u0449\u0430 \u0438\u0437\u043e\u043b\u0438\u0440\u0430\u043d\u0430 \u043c\u0440\u0435\u0436\u0430 \u0441\u044a\u0441 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u0438 IP \u0430\u0434\u0440\u0435\u0441\u0438.\\r\\n- \u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0440\u0442\u043e\u0432\u0435 \u043e\u0442 VPN \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043a\u044a\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 _firefly-iii_.\\r\\n\\r\\n\u041d\u043e \u0440\u0430\u0437\u0431\u0438\u0440\u0430 \u0441\u0435 \u0442\u043e\u0432\u0430 \u043d\u0435 \u0431\u0435\u0448\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u044a\u0447\u043d\u043e, \u0437\u0430 \u0434\u0430 \u0438\u043c\u0430\u043c \u0432\u0440\u044a\u0437\u043a\u0430 \u043a\u044a\u043c _firefly-iii_ \u0438\u0437\u0432\u044a\u043d \u043b\u043e\u043a\u0430\u043b\u043d\u0430 \u043c\u0440\u0435\u0436\u0430 \u0432 \u0434\u043e\u043c\u0430 \u043c\u0438.\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n## WireGuard VPN\\r\\n\\r\\n\u0417\u0430 \u0446\u0435\u043b\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430\u0448\u0435 \u0434\u0430 \u0441\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u044f\u0442 \u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043f\u043e\u0440\u0442\u043e\u0432\u0435 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 _wireguard_. \u0422\u0435\u0437\u0438 \u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0438\u044f \u043b\u0435\u0441\u043d\u043e \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0434\u043e\u0431\u0430\u0432\u044f\u0442 \u0438 \u043f\u0440\u0435\u0437\\r\\n\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0438\u044f \u0444\u0430\u0439\u043b `wg0.conf` \u0447\u0440\u0435\u0437 `PostUp` \u0438 `PostDown` \u043a\u043e\u043c\u0430\u043d\u0434\u0438.\\r\\n\\r\\n### \u0421\u0442\u044a\u043f\u043a\u0430 1 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043a\u043b\u044e\u0447\u043e\u0432\u0435 \u0437\u0430 _wireguard_ \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\\r\\n\\r\\n\u0417\u0430 `linux` \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438, \u043a\u043e\u0438\u0442\u043e \u0441\u0430 \u0441 `kernel` \u0432\u0435\u0440\u0441\u0438\u044f `5.6+` \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 `wireguard` \u043c\u043e\u0434\u0443\u043b\u0430, \u043a\u043e\u0439\u0442\u043e \u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d \u0432 \u044f\u0434\u0440\u043e\u0442\u043e \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435. \u041d\u044f\u043c\u0430 \u043d\u0443\u0436\u0434\u0430 \u043e\u0442 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 `wireguard-tools` \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438 \u043f\u0430\u043a\u0435\u0442\u0438.\\r\\n\\r\\n```bash title=\\"Generate keys for wireguard container\\"\\r\\n wg genkey | tee privatekey | wg pubkey > publickey\\r\\n```\\r\\n\\r\\n:::important\\r\\n\u0442\u0435\u0437\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0430 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f\u0442\u0430 `./config` \u043a\u043e\u044f\u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u0449\u0435 \u0441\u0435 \u043c\u0430\u043f\u043d\u0435 \u043a\u044a\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 _wireguard_\\r\\n:::\\r\\n\\r\\n:::note\\r\\nThe tee command in Linux reads input from standard input (stdin) and writes it to both standard output (stdout) and one or more specified files. It essentially \\"splits\\" the output, allowing it to be displayed on the terminal and saved to a file simultaneously.\\r\\n:::\\r\\n\\r\\n#### \u0421\u0442\u044a\u043f\u043a\u0430 1.1  \u0437\u0430\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430 private key \u0444\u0430\u0439\u043b\u0430\\r\\n\\r\\n```bash title=\\"Set permissions for the private key file\\"\\r\\nchmod 600 privatekey\\r\\n```\\r\\n4+2 = 6 (read and write for the owner)\\r\\n0 (no permissions for the group)\\r\\n0 (no permissions for others)\\r\\n\\r\\n### \u0421\u0442\u044a\u043f\u043a\u0430 2 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u0435\u043d \u0444\u0430\u0439\u043b \u0437\u0430 _wireguard_ \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\\r\\n\\r\\n```conf title=\\"wg0.conf\\"\\r\\n[Interface]\\r\\nPrivateKey = <container_private_key>\\r\\nAddress = 192.168.100.4/24\\r\\nDNS = 192.168.100.1\\r\\n\\r\\nPostUp = iptables -t nat -A PREROUTING -i %i -p tcp --dport 80 -j DNAT --to-destination 192.168.200.4:8080; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\\r\\nPostDown = iptables -t nat -D PREROUTING -i %i -p tcp --dport 80 -j DNAT --to-destination 192.168.200.4:8080; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\\r\\n\\r\\n[Peer]\\r\\nPublicKey = <server_public_key>\\r\\nAllowedIPs = 0.0.0.0/0\\r\\nEndpoint = <server_ip>:<server_port>\\r\\nPersistentKeepalive = 50\\r\\n```\\r\\n - \u0432 \u0441\u043b\u0443\u0447\u0430\u044f \u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043c\u0435 192.168.100.4:80 _wireguard_ (wg0_interfece) \u043a\u044a\u043c 192.168.200.4:8080 _firefly-iii_:\\r\\n`iptables -t nat -A PREROUTING -i %i -p tcp --dport 80 -j DNAT --to-destination 192.168.200.4:8080`\\r\\n - \u0441\u043b\u0435\u0434 \u0442\u043e\u0432\u0430 \u043c\u0430\u0441\u043a\u0438\u0440\u0430\u043c\u0435 \u043f\u0430\u043a\u0435\u0442\u0438\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430\u0442 \u043f\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 `eth0` \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 _wireguard_:\\r\\n`iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`\\r\\n\\r\\n > \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 `%i` \u0437\u0430 \u0438\u043c\u0435\u0442\u043e \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043a\u043e\u0435\u0442\u043e \u0449\u0435 \u0431\u044a\u0434\u0435 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043e\u0442 _wireguard_.\\r\\n\\r\\n:::tip\\r\\n\u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u0434\u043e\u0431\u0430\u0432\u0438 \u0432 `/etc/sysctl.conf`: \\r\\n`net.ipv4.ip_forward=1` \u0437\u0430 \u0434\u0430 \u043f\u043e\u0437\u0432\u0432\u043e\u043b\u0438\u043c \u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u043f\u043e\u0440\u0442\u043e\u0432\u0435, \u0432 \u0441\u043b\u0443\u0447\u0430\u044f \u0442\u043e\u0432\u0430 \u0441\u0435 \u043f\u0440\u0430\u0432\u0438 \u0432 `docker-compose` \u0444\u0430\u0439\u043ba\\r\\n:::\\r\\n\\r\\n### \u0421\u0442\u044a\u043f\u043a\u0430 3 \u0434\u043e\u0431\u0430\u0432\u044f\u043d\u0435 \u043d\u0430 \u043d\u043e\u0432 \u043f\u0438\u044a\u0440 peer \u043a\u044a\u043c _wireguard_ \u0441\u044a\u0440\u0432\u044a\u0440\u0430\\r\\n\\r\\n\u0422\u0435\u0437\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 \u043c\u043e\u044f \u0441\u043b\u0443\u0447\u0430\u0439 \u0441\u0430 \u043f\u0440\u0435\u0437 \u043c\u0438\u043a\u043e\u0442\u0440\u0438\u043a \u0440\u0443\u0442\u0435\u0440\u0430, \u043a\u043e\u0438\u0442\u043e \u043d\u044f\u043c\u0430 \u0434\u0430 \u043e\u043f\u0438\u0441\u0432\u0430\u043c. \u0422\u0443\u043a \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u043d\u0430\u043c\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u0442\u043e\u0432\u0430 \u043a\u0430\u043a \u0441\u0435 \u043f\u0440\u0430\u0432\u0438: [WireGuard VPN Server on MikroTik](https://help.mikrotik.com/docs/spaces/ROS/pages/69664792/WireGuard)\\r\\n\\r\\n\\r\\n### \u0421\u0442\u044a\u043f\u043a\u0430 4 \u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 _wireguard_ \u0442\u0435\u0441\u0442\u043e\u0432\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\\r\\n\\r\\n\u0426\u0435\u043b\u0442\u0430 \u043d\u0430 \u0442\u0430\u0437\u0438 \u0441\u0442\u044a\u043f\u043a\u0430 \u0435 \u0434\u0430 \u0441\u0435 \u0442\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043b\u0438 _wireguard_ \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0441\u0432\u044a\u0440\u0436\u0435 \u043a\u044a\u043c _wireguard_ \u0441\u044a\u0440\u0432\u044a\u0440\u0430.\\r\\n\\r\\n```yaml title=\\"wg-test-compose.yml\\"\\r\\nservices:\\r\\n  wireguard:\\r\\n    image: lscr.io/linuxserver/wireguard:latest         #should retrieve the correct image for your arch\\r\\n    container_name: wireguard\\r\\n    cap_add:\\r\\n      - NET_ADMIN\\r\\n      - SYS_MODULE #optional Some hosts may not load the iptables kernel modules by default\\r\\n    environment:\\r\\n      - PUID=1000\\r\\n      - PGID=1000\\r\\n      - TZ=Etc/UTC\\r\\n      #- SERVERURL=wireguard.domain.com #optional\\r\\n      #- SERVERPORT=51820 #optional\\r\\n      #- PEERS=1 #optional\\r\\n      #- PEERDNS=auto #optional\\r\\n      #- INTERNAL_SUBNET=10.13.13.0 #optional\\r\\n      #- ALLOWEDIPS=0.0.0.0/0 #optional\\r\\n      #- PERSISTENTKEEPALIVE_PEERS= #optional\\r\\n      - LOG_CONFS=true #optional\\r\\n    volumes:\\r\\n      - ./config:/config\\r\\n      - /lib/modules:/lib/modules #optional if SYS_MODULE is set\\r\\n    ports:\\r\\n      - 51820:51820/udp\\r\\n    sysctls:\\r\\n      - net.ipv4.conf.all.src_valid_mark=1\\r\\n      - net.ipv4.ip_forward=1\\r\\n    restart: unless-stopped\\r\\n\\r\\n```\\r\\n\u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043c\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441\\r\\n`docker compose -f wg-test-compose.yml up `\\r\\n\\r\\n:::tip\\r\\n\u043f\u0440\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043d \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0432\u043b\u0435\u0437\u0435\u0442\u0435 \u0432 \u043d\u0435\u0433\u043e \u0441 `docker exec -it wireguard /bin/bash` \u0438 \u0434\u0430 \u043f\u0438\u043d\u0433\u043d\u0435\u0442\u0435 wireguard \u0441\u044a\u0440\u0432\u044a\u0440\u0430 \u0441 `ping <server_ip>`  \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 \u0432 \u043c\u0440\u0435\u0436\u0430\u0442\u0430 \u043d\u0430 \u0441\u044a\u0440\u0432\u044a\u0440\u0430.\\r\\n:::\\r\\n\u0441\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u0432\u0441\u0438\u0447\u043a\u043e \u0440\u0430\u0431\u043e\u0442\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 `docker compose -f wg-test-compose.yml down` \u0438 \u0434\u0430 \u043f\u0440\u0435\u043c\u0438\u043d\u0435\u0442\u0435 \u043a\u044a\u043c \u0441\u043b\u0435\u0434\u0432\u0430\u0449\u0438\u044f \u0435\u0442\u0430\u043f\\r\\n\\r\\n## Docker compose\\r\\n\\r\\n\u0417\u0430 \u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043a\u0430\u043a \u0441\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0432\u0430 _firefly-iii_ \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043c\u043e\u0436\u0435 \u0434\u0430 \u043f\u0440\u043e\u0447\u0435\u0442\u0435\u0442\u0435 \u0442\u0443\u043a: [Firefly III Docker](https://docs.firefly-iii.org/how-to/firefly-iii/installation/docker/)\\r\\n\\r\\n\u0426\u0435\u043b\u0438\u044f\u0442 docker-compose \u0444\u0430\u0439\u043b \u0438\u0437\u0433\u043b\u0435\u0436\u0434\u0430 \u0442\u0430\u043a\u0430:\\r\\n\\r\\n```yaml title=\\"docker-compose.yml\\"\\r\\nservices:\\r\\n  wireguard:\\r\\n    image: lscr.io/linuxserver/wireguard:latest         #should retrieve the correct image for your arch\\r\\n    container_name: wireguard\\r\\n    networks:\\r\\n      wg_network:\\r\\n        ipv4_address: 192.168.200.2\\r\\n    cap_add:\\r\\n      - NET_ADMIN\\r\\n      - SYS_MODULE #optional Some hosts may not load the iptables kernel modules by default\\r\\n    environment:\\r\\n      - PUID=1000\\r\\n      - PGID=1000\\r\\n      - TZ=Etc/UTC\\r\\n      #- SERVERURL=wireguard.domain.com #optional\\r\\n      #- SERVERPORT=51820 #optional\\r\\n      #- PEERS=1 #optional\\r\\n      #- PEERDNS=auto #optional\\r\\n      #- INTERNAL_SUBNET=10.13.13.0 #optional\\r\\n      #- ALLOWEDIPS=0.0.0.0/0 #optional\\r\\n      #- PERSISTENTKEEPALIVE_PEERS= #optional\\r\\n      - LOG_CONFS=true #optional\\r\\n    volumes:\\r\\n      - ./config:/config\\r\\n      - /lib/modules:/lib/modules #optional if SYS_MODULE is set\\r\\n    ports:\\r\\n      - 51820:51820/udp\\r\\n    sysctls:\\r\\n      - net.ipv4.conf.all.src_valid_mark=1\\r\\n      - net.ipv4.ip_forward=1\\r\\n    restart: unless-stopped\\r\\n\\r\\n  app:\\r\\n    image: fireflyiii/core:latest\\r\\n    hostname: app\\r\\n    container_name: firefly_iii_core\\r\\n    restart: always\\r\\n    volumes:\\r\\n      - firefly_iii_upload:/var/www/html/storage/upload\\r\\n    env_file: .env\\r\\n    networks:\\r\\n      wg_network:\\r\\n        ipv4_address: 192.168.200.4\\r\\n    ports:\\r\\n      - 85:8080\\r\\n    depends_on:\\r\\n      - db\\r\\n  db:\\r\\n    image: mariadb:lts\\r\\n    hostname: db\\r\\n    container_name: firefly_iii_db\\r\\n    restart: always\\r\\n    env_file: .db.env\\r\\n    networks:\\r\\n      wg_network:\\r\\n        ipv4_address: 192.168.200.3\\r\\n    volumes:\\r\\n      - firefly_iii_db:/var/lib/mysql\\r\\n  cron:\\r\\n    #\\r\\n    # To make this work, set STATIC_CRON_TOKEN in your .env file or as an environment variable and replace REPLACEME below\\r\\n    # The STATIC_CRON_TOKEN must be *exactly* 32 characters long\\r\\n    #\\r\\n    image: alpine\\r\\n    restart: always\\r\\n    container_name: firefly_iii_cron\\r\\n    command: sh -c \\"echo \\\\\\"0 3 * * * wget -qO- http://app:8080/api/v1/cron/REPLACEME;echo\\\\\\" | crontab - && crond -f -L /dev/stdout\\"\\r\\n    networks:\\r\\n      wg_network:\\r\\n        ipv4_address: 192.168.200.5\\r\\n\\r\\nvolumes:\\r\\n   firefly_iii_upload:\\r\\n   firefly_iii_db:\\r\\n\\r\\nnetworks:\\r\\n  wg_network:\\r\\n    driver: bridge\\r\\n    ipam:\\r\\n      config:\\r\\n        - subnet: 192.168.200.0/24\\r\\n```"},{"id":"regex","metadata":{"permalink":"/blog/regex","source":"@site/blog/2024-09-24-basic-nodejs-regex-formatter/index.mdx","title":"Regex MDbus LOG file with node.js","description":"Open a file, perform regex and generate output file","date":"2024-09-24T00:00:00.000Z","tags":[{"inline":false,"label":"regex","permalink":"/blog/tags/regex","description":"regex tag description"},{"inline":false,"label":"node","permalink":"/blog/tags/node"},{"inline":false,"label":"javascript","permalink":"/blog/tags/js"},{"inline":true,"label":"modbus","permalink":"/blog/tags/modbus"}],"readingTime":2.155,"hasTruncateMarker":true,"authors":[{"name":"Boris Kolev","title":"owner","key":"boris","page":null}],"frontMatter":{"slug":"regex","title":"Regex MDbus LOG file with node.js","authors":["boris"],"tags":["regex","node","js","modbus"]},"unlisted":false,"prevItem":{"title":"Docker compose for Firefly III with WireGuard VPN client","permalink":"/blog/docker-wg-firefly-iii"},"nextItem":{"title":"Greetings!","permalink":"/blog/greetings"}},"content":"Open a file, perform regex and generate output file\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\nCreate a `*.js` file dor exapmle `formatter.js` , *formatter* because this will format [beckhoff.log](./beckhoff.LOG) file from MDBus session to our needs.\\r\\n\\r\\n\\r\\n- will filter for slaveID 01 and func type 03 with `pattern1`, will add new line `\\\\n` and carriage return `\\\\r` before the first match group `$1`, which is (`pattern1`)\\r\\n- will remove the date/time stamp on `pattern2`,\\r\\n- additional formatting with the 3rd pattern\\r\\n\\r\\n```js title=\\"formatter.js\\"\\r\\nconst fs = require(\\"fs\\");\\r\\n\\r\\n// Function to process the file\\r\\nfunction processFile(inputFile, outputFile) {\\r\\n  // Read the input file as a string\\r\\n  fs.readFile(inputFile, \\"utf8\\", (err, data) => {\\r\\n    if (err) {\\r\\n      console.error(\\"Error reading the input file:\\", err);\\r\\n      return;\\r\\n    }\\r\\n\\r\\n    // Find the pattern \\"01 03 \\" and ensure a newline before each occurrence\\r\\n    const pattern1 = \\"01 03 \\";\\r\\n    const pattern2 = /\\\\d{2} \\\\d{2}:\\\\d{2}:\\\\d{2}\\\\.\\\\d{3} B/g;\\r\\n    const modifiedData = data\\r\\n      .replace(pattern2, \\"\\")\\r\\n      .replace(new RegExp(`(${pattern1})`, \\"g\\"), \\"\\\\n\\\\r$1\\")\\r\\n      .replace(/\\\\s\\\\n\\\\s{2}/g, \\"\\");\\r\\n\\r\\n    // Write the modified content to output.txt\\r\\n    file: fs.writeFile(outputFile, modifiedData, \\"utf8\\", (err) => {\\r\\n      if (err) {\\r\\n        console.error(\\"Error writing the output file:\\", err);\\r\\n        return;\\r\\n      }\\r\\n      console.log(`File processed successfully. Check the output at ${outputFile}`);\\r\\n    });\\r\\n  });\\r\\n}\\r\\n\\r\\n// Specify input and output file paths\\r\\nconst inputFile = \\"beckhoff.log\\";\\r\\nconst outputFile = \\"output.txt\\";\\r\\n\\r\\n// Process the file\\r\\nprocessFile(inputFile, outputFile);\\r\\n\\r\\n```\\r\\n\\r\\nTo run the code make sure `beckhoff.log` is in the same folder and type in the terminal:\\r\\n```\\r\\nnode formatter.js\\r\\n```\\r\\nthis will run the app and generate a text file `output.txt` with formatted data\\r\\n\\r\\n\\r\\n## Additional Explanation:\\r\\n\\r\\n***From ChatGPT:***\\r\\n\\r\\n The expression `\\\\n\\\\r$1` is commonly used in the context of a replace operation with regular expressions. Here\'s what it means:\\r\\n\\r\\n `\\\\n\\\\r`: This represents a combination of newline (\\\\n) and carriage return (\\\\r), which is often used to create a new line or start a new paragraph in some operating systems (like Windows).\\r\\n\\r\\n`\\\\n`: Newline character (moves the cursor to the next line).\\\\\\r\\n`\\\\r`: Carriage return (moves the cursor to the beginning of the line).\\\\\\r\\n`$1`: In regular expressions, $1 refers to the first captured group from a matching pattern.\\r\\n\\r\\n When you use parentheses () in a regular expression, whatever is matched inside those parentheses is stored as a \\"capture group.\\"\\r\\n `$1` is a placeholder for the content of the first capturing group, i.e., whatever was matched by the first set of parentheses in the regex.\\r\\n\\r\\n const regex = /(\\\\d+)/g;\\r\\n const str = \\"12345\\";\\r\\n const result = str.replace(regex, \'\\\\n\\\\r$1\');\\r\\n console.log(result);\\r\\n\\r\\n Explanation:\\r\\n\\r\\n Pattern `(\\\\d+)`: Captures one or more digits (e.g., 12345).\\r\\n Replacement `\\\\n\\\\r$1`: Adds a newline and carriage return before the matched digits (which is captured as `$1`)."},{"id":"greetings","metadata":{"permalink":"/blog/greetings","source":"@site/blog/2024-09-18-greetings.md","title":"Greetings!","description":"Congratulations, you have made your first post!","date":"2024-09-18T00:00:00.000Z","tags":[{"inline":true,"label":"greetings","permalink":"/blog/tags/greetings"}],"readingTime":0.105,"hasTruncateMarker":false,"authors":[{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png","socials":{},"key":null,"page":null},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png","socials":{},"key":null,"page":null}],"frontMatter":{"slug":"greetings","title":"Greetings!","authors":[{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png"}],"tags":["greetings"]},"unlisted":false,"prevItem":{"title":"Regex MDbus LOG file with node.js","permalink":"/blog/regex"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Congratulations, you have made your first post!\\r\\n\\r\\nFeel free to play around and edit this post as much as you like."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome","tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Greetings!","permalink":"/blog/greetings"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\r\\n\\r\\nHere are a few tips you might find useful.\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\nSimply add Markdown files (or folders) to the `blog` directory.\\r\\n\\r\\nRegular blog authors can be added to `authors.yml`.\\r\\n\\r\\nThe blog post date can be extracted from filenames, such as:\\r\\n\\r\\n- `2019-05-30-welcome.md`\\r\\n- `2019-05-30-welcome/index.md`\\r\\n\\r\\nA blog post folder can be convenient to co-locate blog post images:\\r\\n\\r\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\nThe blog supports tags as well!\\r\\n\\r\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\r\\n\\r\\n:::tip\\r\\n\\r\\nUse the power of React to create interactive blog posts.\\r\\n\\r\\n:::\\r\\n\\r\\n{/* truncate */}\\r\\n\\r\\nFor example, use JSX to create an interactive button:\\r\\n\\r\\n```js\\r\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\r\\n```\\r\\n\\r\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":2.06,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\r\\n\\r\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet...","date":"2019-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.135,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet...\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);