import { Component } from "@angular/core";
@Component({
//Nombre del html
selector: 'contador',
//pagina o codigo html de contador 
templateUrl: '../contador/contador.component.html',
styleUrls: ['../../app.component.scss']
})
export class ContadorComponent {
    public titulo: string = 'Contador App';

    numero: number  = 0;
    base : number = 5;
    sumarX(){
  
      this.numero = this.numero + 1;
    }
  
    acumular(valor :number){
  
      this.numero += valor;
  
    }
  
    quitar(a:number){
  
      
  
      this.numero = this.numero - a
  
  
      return this.numero
  
      
  
  
    }
  

}