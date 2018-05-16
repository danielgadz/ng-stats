import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipo';
import { EQUIPOS } from '../mock-equipos';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EquipoService {

  constructor() { }

  obtenerEquipos(): Observable<Equipo[]> {
    return of(EQUIPOS);
  }

}
