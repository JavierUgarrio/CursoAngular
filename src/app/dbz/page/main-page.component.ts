import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../interface/characters.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{

  /*
   En el constructor realizo la inyeccion de dependencias para trabajar con dbz.service
  */
  constructor(private DbzService: DbzService) {

  }

  get character():Character[]{
    return [...this.DbzService.characters];
  }

    onDeleteCharacter(id:string):void {
      this.DbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character):void{
      this.DbzService.addCharacter(character);
    }

  /* Lo enviamos al service "buenas practicas" ya que se puede utilizar en toda la aplicacion. Si no en un futuro al crear otro componente que puede ser del mimso nivel "hermanos"
  dificultaria el envio de datos o de informacion. aplicando servicios podemos utilizarlo en todos los componentes trabajando la composicon en vez de la herencia
  public characters : Character[]=[{
    name:'Krillin',
    power:1500,
  },{
    name : 'Goku',
    power: 10000
  }

  ];

  onDeleteId(index:number){
    this.characters.splice(index,1);
  }


    Se utiliza para recibir la informacion del hijo y mostrarlo por consola

  onNewCharacter(character: Character):void{

    this.characters.push(character);


  }
  */
}
