import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicaEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caracteristicaEmpleados.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
