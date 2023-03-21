import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-busqueda-regiones',
  templateUrl: './busqueda-regiones.component.html',
  styleUrls: ['./busqueda-regiones.component.css']
})
export class BusquedaRegionesComponent implements OnInit {

  constructor(private servicio : PaisesService) { }
  continentes:string[] = ["Europe", "Asia", "Oceania", "Africa", "Americas"];
  paisesRegion:Pais[] = [];
  regionActiva:string = "";

  ngOnInit(): void {
  }

  buscarContinente(nombre: string){
    if(this.regionActiva === nombre){
      return;
    }else{
      this.regionActiva = nombre;
      this.servicio.buscarContinente(nombre).subscribe((respuesta:any) => {
      this.paisesRegion = respuesta;
      console.log(respuesta);
      })
    }
  }

  cambiarCss(item:string){
    return (this.regionActiva===item)? 'btn-primary': 'btn-outline-primary';
  }

}
