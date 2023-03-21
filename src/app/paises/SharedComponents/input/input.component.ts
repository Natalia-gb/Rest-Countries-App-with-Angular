import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Output() onSearch:EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder:string = "";

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.onSearch.emit(termino);
  }

}
