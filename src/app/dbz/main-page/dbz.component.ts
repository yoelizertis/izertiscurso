import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent {


  nuevo: Personaje={
    nombre:'Maestro Roshi',
    poder:10000
  }

  // get personajes():Personaje[]{
  //   return this.DbzService.personajes;
  // }

  constructor(){
    
  }
}
