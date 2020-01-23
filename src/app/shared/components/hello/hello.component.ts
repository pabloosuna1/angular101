import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() nombre: string;

  @Output() evento: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  mensaje(){
    this.evento.emit('EVENTO LANZADO DESDE HELLO - Saludo de ' + this.nombre);
  }

}
