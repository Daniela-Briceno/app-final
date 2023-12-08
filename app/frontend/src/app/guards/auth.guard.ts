// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegúrate de importar el servicio AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      // Si el usuario está autenticado, redirige a la página de inicio
      this.router.navigate(['/home']);
      return false; // No permite el acceso a la ruta
    } else {
      // Si el usuario no está autenticado, permite el acceso a la ruta
      return true;
    }
  }
}
