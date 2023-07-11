import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interface/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {



  @Output()
  public DeletedId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{

    name:'Trunk',
    power:100,

  }

  ];

  onDeleteId (id?: string): void{
    if(!id)return;
    this.DeletedId.emit(id);
  }

  /*
  onDeleteCharacter(index: number):void{
    console.log({index});
   }
   */
}
