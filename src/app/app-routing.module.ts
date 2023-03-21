import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaCapitalesComponent } from './paises/SPA/busqueda-capitales/busqueda-capitales.component';
import { BusquedaPaisesComponent } from './paises/SPA/busqueda-paises/busqueda-paises.component';
import { BusquedaRegionesComponent } from './paises/SPA/busqueda-regiones/busqueda-regiones.component';
import { DetallesPaisesComponent } from './paises/SPA/detalles-paises/detalles-paises.component';

const routes: Routes = [
  {path: "", component: BusquedaPaisesComponent},
  {path: "busqueda-capitales", component: BusquedaCapitalesComponent},
  {path: "busqueda-regiones", component: BusquedaRegionesComponent},
  {path: "busqueda-paises/:id", component: DetallesPaisesComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
