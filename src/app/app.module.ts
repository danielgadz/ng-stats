import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquipoDetallesComponent } from './equipo-detalles/equipo-detalles.component';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoService } from './service/equipo.service';


@NgModule({
  declarations: [
    AppComponent,
    EquipoDetallesComponent,
    EquiposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
