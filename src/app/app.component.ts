import { Component } from '@angular/core';
import { EncryptionDecryptionService } from './core/services/encryption-decryption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string;
  password: string;
  encryptedData: any;
  decryptedData: any;

  decryptUsername: string;
  decryptPassword: string;

  constructor(
    private encryptionDecryptionService: EncryptionDecryptionService
  ) { }

  convertData() {
    let data = {
      username: this.username.trim(),
      password: this.password.trim(),
    }
    this.encryptedData = this.encryptionDecryptionService.encryptData(data);
  }

  decryptData() {
    this.decryptedData = this.encryptionDecryptionService.decryptData(this.encryptedData);
    if (this.decryptedData) {
      this.decryptUsername = this.decryptedData["username"];
      this.decryptPassword = this.decryptedData["password"];
    }
  }

}