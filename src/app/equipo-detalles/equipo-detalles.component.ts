import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../model/equipo';

@Component({
  selector: 'app-equipo-detalles',
  templateUrl: './equipo-detalles.component.html',
  styleUrls: ['./equipo-detalles.component.css']
})
export class EquipoDetallesComponent implements OnInit {

  @Input() equipo: Equipo;

  constructor() { }

  ngOnInit() {
  }

}
