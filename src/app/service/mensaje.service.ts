import { Injectable } from '@angular/core';

@Injectable()
export class MensajeService {

  mensajes: string[] = [];

  constructor() { }

  agregar(mensaje: string) {
    this.mensajes.push(mensaje);
  }

  limpiar() {
    this.mensajes = [];
  }
}
