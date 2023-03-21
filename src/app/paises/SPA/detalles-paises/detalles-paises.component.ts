import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-detalles-paises',
  templateUrl: './detalles-paises.component.html',
  styleUrls: ['./detalles-paises.component.css']
})
export class DetallesPaisesComponent implements OnInit{

  constructor(private servicio : PaisesService, private activeRoute : ActivatedRoute) { }
  paisID! : Pais;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(({id}) => {
      this.servicio.buscarPaisId(id).subscribe((respuesta:any) => {
        this.paisID = respuesta[0];
        console.log(respuesta[0]);
        
      })
    })
  }

}
