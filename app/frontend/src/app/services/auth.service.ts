import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'authState';
  private isAuthenticated = false;

  constructor() {
    // Recupera el estado de autenticación almacenado al iniciar el servicio
    this.isAuthenticated = localStorage.getItem(this.storageKey) === 'true';
  }

  login() {
    this.isAuthenticated = true;
    // Almacena el estado de autenticación en localStorage
    localStorage.setItem(this.storageKey, 'true');
  }

  logout() {
    this.isAuthenticated = false;
    // Elimina el estado de autenticación de localStorage
    localStorage.removeItem(this.storageKey);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}