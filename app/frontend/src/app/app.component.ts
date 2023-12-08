// app.component.ts
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'; // Asegúrate de importar el servicio AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laboratorio AppInternet - Redes 2';

  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
