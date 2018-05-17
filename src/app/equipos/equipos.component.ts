import { EquipoService } from '../service/equipo.service';
import { Component, OnInit } from '@angular/core';
import { Equipo } from '../model/equipo';
import { MensajeService } from '../service/mensaje.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  selectedEquipo: Equipo;

  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService, private mensajeService: MensajeService) { }

  ngOnInit() {
    this.obtenerEquipos();
  }

  onSelect(equipo: Equipo): void {
    const mensaje = `Has seleccionado el equipo con id: ${equipo.id} y con nombre ${equipo.name}`;
    //const mensaje = 'Has seleccionado el equipo con id: ' + equipo.id + ' y con nombre: ' + equipo.name;
    this.mensajeService.agregar(mensaje);
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
