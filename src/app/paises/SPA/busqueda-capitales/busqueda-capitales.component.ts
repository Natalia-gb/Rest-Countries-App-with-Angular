import { Component} from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-busqueda-capitales',
  templateUrl: './busqueda-capitales.component.html',
  styleUrls: ['./busqueda-capitales.component.css']
})
export class BusquedaCapitalesComponent{

  constructor(private servicio : PaisesService) { }
  capitales:Pais[] = [];

  buscarCapital(cap: string){
    this.servicio.buscarCapital(cap).subscribe((respuesta:any) => {
      this.capitales = respuesta;
      console.log(respuesta);
    });
  }

}
