import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interface/characters.interface';



@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character ={
    name:' ',
    power:1
  }

  emitCharacter():void{

    if(this.character.name.length ===0)return;

    this.onNewCharacter.emit(this.character);

    this.character ={name:'', power: 0};


  }
}
