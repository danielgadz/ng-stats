import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipo';
import { EQUIPOS } from '../mock-equipos';

@Injectable()
export class EquipoService {

  constructor() { }

  obtenerEquipos(): Equipo[] {
    return EQUIPOS;
  }

}
