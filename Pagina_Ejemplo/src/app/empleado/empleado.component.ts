import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí están los empleados</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Diaz";
  edad = 20;
  //empresa = "Microsoft"; 

  // NombreEmpresa(value:String){}

  habilitarinput = true;

  UsuRegistrado = false;

  textoDeRegistro = "No hay personas Registradas";

  getRegistroUsuario(){
    this.UsuRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario acaba de pulsar sobre el botón");
    //alert(event.target);
    //this.textoDeRegistro = "Usuario Registrado";

    if((<HTMLInputElement>event.target).value == "Sí"){
      this.textoDeRegistro = "Usuario Registrado";
    } else{
      this.textoDeRegistro = "No hay personas Registradas";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
