import { Component } from "@angular/core";

@Component({

selector: 'heroe',
templateUrl: 'heroe.component.html',

styleUrls: ['../../app.component.scss']

})

export class HeroeComponent {


    nombre : string = "Ironman"
    edad : number = 45

   

    obtenerN() : string {



        
        let nombreX : string  =  `${this.nombre } ----- ${this.edad}`

        //para crear plantillas se usan template strings 
        return nombreX
    }
  

    //metodo getter

    getNombreCap() : string {



      return this.obtenerN().toUpperCase()

    }

    cambiarX():void{


this.nombre = "Spiderman"

    }

    cambiarE():void{


this.edad = 20//

    }

}