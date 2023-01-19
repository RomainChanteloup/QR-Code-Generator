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

  generateQrCode(stringValue) {
    QRCode.toDataURL(stringValue)
      .then((url) => {
        this.qrCodeBase64 = url;
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  onKey(event: any) {
    console.log('String', event.target.value, ';');
    this.generateQrCode(event.target.value);
  }

  ngOnInit() {
    this.generateQrCode('this is a test');
  }
}
