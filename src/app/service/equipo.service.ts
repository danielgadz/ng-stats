import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipo';
import { EQUIPOS } from '../mock-equipos';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MensajeService } from './mensaje.service';

@Injectable()
export class EquipoService {

  constructor(private mensajeService: MensajeService ) { }

  obtenerEquipos(): Observable<Equipo[]> {
    this.mensajeService.agregar('Equipos cargados');
    return of(EQUIPOS);
  }

}
