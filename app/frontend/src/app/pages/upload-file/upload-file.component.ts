import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as CryptoJS from 'crypto-js';
import { DialogRequieLoginComponent } from 'src/app/componentes/dialog-requie-login/dialog-requie-login.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  fileContent: string = '';
  resultContent: string = '';
  selectedOption: string = 'encrypt';
  secretKey : string = 'secret-key'

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
  ) { }

  handleFileInput(event: any): void {
    const files = event?.target?.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.fileContent = reader.result as string;
      };
  
      reader.readAsText(file);
    }
  }

  processFile(): void {    
    if (!this.authService.isAuthenticatedUser()) {
      this.openDialog();
    } else if (this.selectedOption === 'encrypt') {
      this.resultContent = this.encryptFile(this.fileContent);
    } else {
      this.resultContent = this.decryptFile(this.fileContent);
    }
  }

  encryptFile(content: string): string {
    const encrypted = CryptoJS.AES.encrypt(content, this.secretKey).toString();
    return encrypted;
  }

  decryptFile(content: string): string {
    const decrypted = CryptoJS.AES.decrypt(content, this.secretKey).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  downloadFile(): void {
    const blob = new Blob([this.resultContent], { type: 'text/plain' });
    const link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = this.selectedOption === 'encrypt' ? 'encrypted.txt' : 'decrypted.txt';

    link.click();
  }
  openDialog(): void {
    this.dialog.open(DialogRequieLoginComponent);
  }
}
