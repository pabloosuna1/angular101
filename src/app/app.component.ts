import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular101';

  name = 'Marcos';

  capturaMensaje(mensaje) {
    console.log('Mensaje capturado en APP de HELLO: ' + mensaje);
  }
}
