import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifrado-rsa',
  templateUrl: './cifrado-rsa.component.html',
  styleUrls: ['./cifrado-rsa.component.css']
})

export class CifradoRSAComponent implements OnInit {  
  numerosPrimosDeEjemplo: number[] = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
    179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
    233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349
  ];

  p: number = 0;
  q: number = 0;
  n: number = 0;
  phi: number = 0;
  e: number = 0;
  d: number = 0;


  mensajeOriginal: string = '';
  mensajeEncriptado: number[] = [];
  mensajeDesencriptado: string = '';

  constructor() {}
  ngOnInit(): void {}

  primoQ: number = 0;
  primoP: number = 0;

  esPrimo(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  generarNumeroPrimo(): number {
    let numero = Math.floor(Math.random() * 100) + 1;
    while (!this.esPrimo(numero)) {
      numero = Math.floor(Math.random() * 100) + 1;
    }
    return numero;
  }

  generarPrimosAleatorio(): void {
    this.primoQ = this.generarNumeroPrimo();
    this.primoP = this.generarNumeroPrimo();

    // Asegurarse de que primoQ y primoP no sean iguales
    while (this.primoQ === this.primoP) {
      this.primoP = this.generarNumeroPrimo();
    }
    this.calcularN();
  }

  calcularN(): void{
    this.n = this.primoQ * this.primoP
  }

  calcularPhi(): void {
    if (this.primoQ !== null && this.primoP !== null) {
      this.phi = (this.primoP - 1) * (this.primoQ - 1);
    } else {
      this.phi = 0;
    }
  }
  escogerExponente(): void {
    if (this.phi !== null) {
      // Escoge un exponente e menor que phi y coprimo con phi
      for (let i = 2; i < this.phi; i++) {
        if (this.esCoprimo(i, this.phi)) {
          this.e = i;
          break;
        }
      }
    } else {
      this.e = 0;
    }
  }

  esCoprimo(a: number, b: number): boolean {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a === 1;
  }
  
  determinarD(): void {
    if (this.e !== null && this.phi !== null) {
      const result = this.algoritmoEuclidesExtendido(this.e, this.phi);
      this.d = result.d < 0 ? result.d + this.phi : result.d;
    } else {
      this.d = 0;
    }
  }

  algoritmoEuclidesExtendido(a: number, b: number): { d: number, x: number, y: number } {
    if (b === 0) {
      return { d: a, x: 1, y: 0 };
    } else {
      const result = this.algoritmoEuclidesExtendido(b, a % b);
      const d = result.d;
      const x = result.y;
      const y = result.x - Math.floor(a / b) * result.y;
      return { d, x, y };
    }
  }

  calcularClavePrivada(): void {
    let x0 = 1;
    let x1 = 0;
    let y0 = 0;
    let y1 = 1;
    let a = this.phi;
    let b = this.e;
  
    while (b !== 0) {
      const quotient = Math.floor(a / b);
      [a, b] = [b, a % b];
      [x0, x1] = [x1, x0 - quotient * x1];
      [y0, y1] = [y1, y0 - quotient * y1];
    }
  
    this.d = (x0 % this.phi + this.phi) % this.phi; // Asegura que d sea positivo
  }  

  encriptarMensaje(): void {
    const mensajeEnBytes = this.mensajeOriginal.split('').map(char => char.charCodeAt(0));
    this.mensajeEncriptado = mensajeEnBytes.map(charCode => (charCode ** this.e) % this.n);
  }

  desencriptarMensaje(): void {
    const mensajeDesencriptadoBytes = this.mensajeEncriptado.map(
      encryptedChar => (encryptedChar ** this.d) % this.n
    );
    this.mensajeDesencriptado = String.fromCharCode(...mensajeDesencriptadoBytes);
  }

  calcularValores(): void {
    // Verifica que ambos números primos seleccionados sean diferentes de 0
    if (this.p !== 0 && this.q !== 0) {
      // Calcula n y phi
      this.n = this.p * this.q;
      this.phi = (this.p - 1) * (this.q - 1);
    } else {
      // Si no se han seleccionado dos números primos, establece n y phi en 0
      this.n = 0;
      this.phi = 0;
    }
  }

  limpiarMensajes(): void {
    this.mensajeOriginal = '';
    this.mensajeEncriptado = [];
    this.mensajeDesencriptado = '';
    this.p = 0;
    this.q = 0;
    this.n = 0;
    this.phi = 0;
    this.e = 0;
    this.d = 0;
  }

  gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  eulerPhi(n: number): number | string {
      if (n <= 0 || !Number.isInteger(n)) {
          return "El argumento debe ser un número entero positivo.";
      }

      let result: number = n;

      for (let i: number = 2; i * i <= n; i++) {
          if (n % i === 0) {
              while (n % i === 0) {
                  n /= i;
              }
              result -= result / i;
          }
      }

      if (n > 1) {
          result -= result / n;
      }

      return Math.round(result); // Redondear el resultado para asegurarse de obtener un número entero
  }

}