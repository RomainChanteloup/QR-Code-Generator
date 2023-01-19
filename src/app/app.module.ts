import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QrcodeGeneratorComponent } from './components/qrcode-generator/qrcode-generator.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, QrcodeGeneratorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
