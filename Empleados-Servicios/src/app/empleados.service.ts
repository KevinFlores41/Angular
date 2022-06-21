import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
@Injectable()

export class EmpleadosService{
    
    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }

    setEmpleados(misUsuarios:Empleado[]){
      this.empleados=misUsuarios;
    }

    empleados:Empleado[]=[
        // new Empleado("Juan", "Medina", "CEO", 102500),
        // new Empleado("Noel", "Turcios", "Gerente", 95000),
        // new Empleado("Jese", "Romero", "Coordinador de Distribución", 45500),
        // new Empleado("Alejandro", "Rodriguez", "Director de Tecnología", 75500),
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona a Agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];

        return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado = this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleados(indice,empleado);

      }

      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);

        this.dataService.eliminarEmpleados(indice);

        if(this.empleados!=null){
          this.dataService.guardarEmpleados(this.empleados);
        }
      }

}