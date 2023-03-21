import { Component} from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-busqueda-paises',
  templateUrl: './busqueda-paises.component.html',
  styleUrls: ['./busqueda-paises.component.css']
})
export class BusquedaPaisesComponent{

  constructor(private service : PaisesService) { }
  paises:Pais[] = [];

  buscarPais(pais:string){
    this.service.buscarPais(pais).subscribe((respuesta:any) => {
      this.paises = respuesta;
      console.log(respuesta);
    });
  }

}
