import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora App';
  
  // numero1:String="0";
  // numero2:String="0";
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void{
    // this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }

  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar():void{
    this.resultado = this.numero1 * this.numero2;
  }

  dividir():void{
    if(this.numero2 == 0){
      this.resultado = 0;
    } else {
      this.resultado = this.numero1 / this.numero2;
    }
  }

}
