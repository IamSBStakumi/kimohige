# ステルスSSIDへの接続方法
- Ubuntuセットアップ中、ログインループが発生することがある
- ログインループが発生すると、apt updateなどを実行する必要があるが、マニュアルではセットアップ時にWi-Fiの設定をしていない
- ログインループが生じるとctl+alt+F7でCUIを開いて操作しなければならない
- SSIDが表示されているアクセスポイントは簡単に接続ができるが、ステルスSSIDへの接続設定はCUIから行う必要がある

## 1. 00-installer-config-wifi.yamlの作成/編集
```bash
sudo nano 00-installer-config-wifi.yaml
```

```yaml
network:
  version: 2
  wifis:
    [ネットワークインターフェースの名前]:
      access-points:
        "SSID":
        hidden: true
        password: "PASSWORD"
      dhcp4: true
      optional: true
```
- ネットワークインターフェースの名前はあとから変更できるので、分からなければ一旦"wlp5s0"などを使用する
## 2. 接続テスト
- 接続を確認、設定ファイル作成、実行
```bash
sudo netplan --debug try
sudo netplan --debug generate
sudo netplan apply
```
## 3. deviceの状態確認
```bash
nmcli d status
> DEVICE         TYPE         STATE                            CONNECTION
> DEVICE_NAME    wifi         connection(need authentication)  ---
```
- 上記のように表示されていればOK
## 4. 接続プロファイルを編集
```bash
sudo nmcli connection edit DEVICE_NAME

set ipv4.method auto
set ipv6.method auto
set 802-1x.eap peap
set 802-1x.phase2-auth mschapv2
set 802-1x.identity Wi-Fi_USERNAME
set 802-1x.password Wi-Fi_PASSWORD
set 802-11-wireless-security.keymgmt wpa.eap
save
activate
quit
```
- activateコマンドを実行すると、ネットワークインターフェースの名前が異なるといったメッセージが出る場合は以下を実行
```bash
sudo nano /etc/NetworkManager/system-connections/DEVICE_NAME.nmconnection
// 以下編集内容
[connection]
interface=INTERFACE_NAME   <= activateコマンド実行時に表示されたネットワークインターフェースの名前に変更
```
- ファイル保存後、NetworkManagerを再起動
```bash
systemctl restart NetworkManager
nmcli connection down DEVICE_NAME
nmcli connection up DEVICE_NAME
```
## 5. deviceの状態確認
```bash
nmcli d status
```
- 上記コマンドを実行し、STATEがconnectedになっていればWi-Fi接続ができている
- Ubuntuの環境構築が終われば、改めてGUIを使用してWi-Fiを設定する

#### 参考
- [［小ネタ］Ubuntu での Wi-Fi 設定こと始め（ターミナルで設定）](https://ineters.com/unix/ubuntu-wi-fi/)
- [nmcliでwifiに接続する](https://soblin.github.io/techblog/posts/007-nmcli-wifi/)
- [CentOS7でステルスSSIDへ接続する方法](https://qiita.com/n7aka/items/64e8fdd11e3f7ceaa49c)
