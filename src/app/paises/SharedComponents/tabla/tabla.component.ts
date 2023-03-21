import { Component, Input} from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() paises : Pais[] = [];
  constructor() { }

  

}
