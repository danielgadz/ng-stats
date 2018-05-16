import { EquipoService } from '../service/equipo.service';
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

  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.obtenerEquipos();
  }

  onSelect(equipo: Equipo): void {
    this.selectedEquipo = equipo;
  }

  obtenerEquipos(): void {
    this.equipoService.obtenerEquipos().subscribe(
      /*function (arregloequipos) {
        this.equipos = arregloequipos;
      }*/
      arregloequipos => this.equipos = arregloequipos
    );
  }
}
