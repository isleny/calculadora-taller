import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo='Calculeitor'
  
  numero1:number;
  numero2:number;
  resultado:number;

  sumar():void{
    this.resultado= this.numero1 + this.numero2;
  }

  restar():void{
    this.resultado= this.numero1 - this.numero2;
  }

  multiplicar():void{
    this.resultado= this.numero1 * this.numero2;
  }

  dividir():void{
    this.resultado= this.numero1 / this.numero2;
  }

constructor() { }

ngOnInit(): void {
  
}




}
