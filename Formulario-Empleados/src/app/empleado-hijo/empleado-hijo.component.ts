import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() empleadoDeLista:Empleado;
  @Input() iDeLista:number;

  empleados:Empleado[]=[
    new Empleado("Juan", "Medina", "CEO", 102500),
    new Empleado("Noel", "Turcios", "Gerente", 95000),
    new Empleado("Jese", "Romero", "Coordinador de Distribución", 45500),
    new Empleado("Alejandro", "Rodriguez", "Director de Tecnología", 75500),
  ];

  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }

  arrayCaracteristicas = [""];

  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
