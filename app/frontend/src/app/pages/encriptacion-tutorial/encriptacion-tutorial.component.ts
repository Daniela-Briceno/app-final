import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encriptacion-tutorial',
  templateUrl: './encriptacion-tutorial.component.html',
  styleUrls: ['./encriptacion-tutorial.component.css']
})
export class EncriptacionTutorialComponent {
  cifradoSeleccionado: string = '';
  
  cifrados = [
    { nombre: 'Cifrado César', ruta:'tutorialEncriptación/rsa'},
    { nombre: 'Cifrado Vigenère', ruta:'tutorialEncriptación/rsa'},
    { nombre: 'Cifrado de Transposición', ruta:'tutorialEncriptación/rsa'},
    { nombre: 'Cifrado de Hill', ruta:'tutorialEncriptación/rsa'},
    { nombre: 'Cifrado de Flujo (XOR)', ruta:'tutorialEncriptación/rsa'},
    { nombre: 'Cifrado de Bloque (AES)', ruta:'tutorialEncriptación/rsa'},
    { nombre: 'Cifrado RSA', ruta:'tutorialEncriptación/rsa'},
  ];

  tutorialSteps = [
    { description: 'Selecciona un algoritmo de encriptación seguro.' },
    { description: 'Genera una clave secreta para el algoritmo seleccionado.' },
    { description: 'Obtén el texto o archivo que deseas encriptar.' },
    { description: 'Aplica el algoritmo de encriptación utilizando la clave secreta.' },
    { description: 'Guarda o transmite el resultado encriptado de manera segura.' }
  ];

  constructor(private router: Router) {}

  redirigir() {
    // Obtén la ruta correspondiente al cifrado seleccionado
    const rutaSeleccionada = this.cifrados.find(c => c.nombre === this.cifradoSeleccionado)?.ruta;

    // Redirige a la ruta correspondiente
    if (rutaSeleccionada) {
      this.router.navigate([rutaSeleccionada]);
    }
  }
}
