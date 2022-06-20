import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  
  empleados:Empleado[]=[
    new Empleado("Juan", "Medina", "CEO", 102500),
    new Empleado("Noel", "Turcios", "Gerente", 95000),
    new Empleado("Jese", "Romero", "Coordinador de Distribución", 45500),
    new Empleado("Alejandro", "Rodriguez", "Director de Tecnología", 75500),
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }

}
