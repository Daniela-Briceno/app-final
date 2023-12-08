// dialog-requie-login.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-requie-login',
  templateUrl: './dialog-requie-login.component.html',
  styleUrls: ['./dialog-requie-login.component.css']
})
export class DialogRequieLoginComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogRequieLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string },
    private router: Router
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  login(): void {
    this.closeDialog();
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  register(): void {
    this.closeDialog();
    // Redirige a la página de registro
    this.router.navigate(['/registro']);
  }
}
