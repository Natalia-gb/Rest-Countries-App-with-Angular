import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaPaisesComponent } from './SPA/busqueda-paises/busqueda-paises.component';
import { BusquedaCapitalesComponent } from './SPA/busqueda-capitales/busqueda-capitales.component';
import { BusquedaRegionesComponent } from './SPA/busqueda-regiones/busqueda-regiones.component';
import { DetallesPaisesComponent } from './SPA/detalles-paises/detalles-paises.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InputComponent } from './SharedComponents/input/input.component';
import { TablaComponent } from './SharedComponents/tabla/tabla.component';


@NgModule({
  declarations: [
    BusquedaPaisesComponent,
    BusquedaCapitalesComponent,
    BusquedaRegionesComponent,
    DetallesPaisesComponent,
    InputComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    HttpClientModule,
    RouterModule

  ],
  exports: [
    BusquedaPaisesComponent
  ]
})
export class PaisesModule { }
