import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Ruta correcta al servicio AuthService
import { DialogMessageComponent } from '../../componentes/dialog-message/dialog-message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    username: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService, // Inyecta el servicio de autenticación
    private router: Router,
    public dialog: MatDialog
  ) {}

  submitForm(): void {
    const url = 'http://127.0.0.1:8000/api/validacion-credenciales-usuario/';

    const payload = {
      usuario: this.usuario.username,
      contrasena: this.usuario.password
    };

    this.http.post(url, payload).subscribe(
      (response) => {
        // Manejar la respuesta del servidor
        // REDIRIGIR A DASHBOARD

        // Almacena el estado de autenticación en el servicio de autenticación
        this.authService.login();

        // Redirige a la página deseada después del inicio de sesión exitoso
        this.router.navigate(['/dashboard']);

        // Muestra un mensaje al usuario
        this.openDialog(`El usuario ha iniciado sesión correctamente`);

        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        // Manejar el error en caso de fallo en la autenticación
        this.openDialog(`Error: el usuario no existe en la base de datos`);

        console.error('Error en la autenticación:', error);
      }
    );
  }

  ngOnInit(): void {}
  
  openDialog(mensaje: string): void {
    this.dialog.open(DialogMessageComponent, {
      data: { mensaje },
    });
  }
}
