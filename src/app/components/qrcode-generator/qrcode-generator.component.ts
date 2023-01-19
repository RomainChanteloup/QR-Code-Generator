import { Component, Input, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.css'],
})
export class QrcodeGeneratorComponent implements OnInit {
  constructor() {}

  qrCodeBase64 = null;
  wifiCheck = false;
  hiddenNetwork = false;

  WifiSecurityList = ['nopass', 'WPA', 'WEP'];
  selectedSecurity = this.WifiSecurityList[0];
  SSID = '';
  password = '';

  generateQrCode(stringValue) {
    console.log(stringValue);
    QRCode.toDataURL(stringValue)
      .then((url) => {
        this.qrCodeBase64 = url;
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  generateWifiQCode(ssid, password) {
    // spec of wifi qr code here https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11
    let WifiStringFormated =
      'WIFI:T:' + this.selectedSecurity + ';S:' + ssid + ';P:' + password + ';';
    if (this.hiddenNetwork) {
      WifiStringFormated += 'H:True;';
    }
    WifiStringFormated += ';';

    this.generateQrCode(WifiStringFormated);
  }

  onKey(event: any) {
    this.generateQrCode(event.target.value);
  }

  setSSID(event: any) {
    this.SSID = event.target.value;
    this.generateWifiQCode(this.SSID, this.password);
  }

  setPassword(event: any) {
    this.password = event.target.value;
    this.generateWifiQCode(this.SSID, this.password);
  }

  setHiddenNetwork(event: any) {
    this.hiddenNetwork = event;
    this.generateWifiQCode(this.SSID, this.password);
  }

  setSecurity(event: any) {
    this.selectedSecurity = event.value;
    this.generateWifiQCode(this.SSID, this.password);
  }

  ngOnInit() {
    this.generateQrCode('To The Moon');
  }
}
