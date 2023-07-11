import { Character } from '../interface/characters.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters : Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1500,
  },{
    id:uuid(),
    name : 'Goku',
    power: 10000
  }, {
    id:uuid(),
    name : 'Vegeta',
    power: 95000
  }

  ];
/*
Este metodo se aplicando con el numero de indice, se sustituye para aplicar el UUI()
  onDeleteId(index:number){
    this.characters.splice(index,1);
  }

*/

  addCharacter(character: Character):void{

    const newCharacter :Character ={ id:uuid(), ...character};
    this.characters.push(newCharacter);


  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !==id);
  }

}
