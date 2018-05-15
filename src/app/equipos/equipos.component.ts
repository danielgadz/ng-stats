import {EquipoService} from '../service/equipo.service';
import { Component, OnInit } from '@angular/core';
import { Equipo } from '../model/equipo';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipo: Equipo = {
    id: 1,
    name: 'Nombre Equipo'
  };

  selectedEquipo: Equipo;

  equipos = this.equipoService.obtenerEquipos();

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {

  }

  onSelect(equipo: Equipo): void {
    this.selectedEquipo = equipo;
  }
}
