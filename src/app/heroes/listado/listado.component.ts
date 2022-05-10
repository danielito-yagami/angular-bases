import { Component } from '@angular/core';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ListadoComponent {


  heroes : string[] = ["Spiderman","Ironman","War Machine","Venom","Capitan America"]

  heroesB :string[]= []

  public condicion: boolean = false

  saludo :string = "String"

  constructor() { }

  //primer ciclo de vida en angular 
  //ciertos metodos que dispara angular 
  

  borrarHeroe():void{

  
//Cuando tenga el valor de undefined tambien los 
// igualo a cadena vacia 
let heroeX = this.heroes.pop() || ''

if(heroeX ==''){
  this.condicion = false

console.log("No hay mas heroes")

}else {
  this.condicion = true
this.heroesB.unshift(heroeX)
console.log(this.heroesB)

}


  }
}
