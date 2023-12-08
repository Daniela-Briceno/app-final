// create-user-form.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component'; // Importa el nuevo componente

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  };

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  submitForm() {
    const apiUrl = 'http://127.0.0.1:8000/api/creacion-usuario/';

    this.http.post(apiUrl, this.usuario)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.openDialog(`El usuario a sido creado correctamente`);
        },
        error => {
          this.openDialog(`Error al crear el usuario`);
          console.error('Error al enviar la solicitud POST:', error);
        }
      );
  }

  openDialog(mensaje: string): void {
    this.dialog.open(DialogMessageComponent, {
      data: { mensaje },
    });
  }
}
