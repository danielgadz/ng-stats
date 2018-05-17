import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquipoDetallesComponent } from './equipo-detalles/equipo-detalles.component';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoService } from './service/equipo.service';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MensajeService } from './service/mensaje.service';


@NgModule({
  declarations: [
    AppComponent,
    EquipoDetallesComponent,
    EquiposComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EquipoService, MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
