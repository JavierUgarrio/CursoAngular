import { NgModule } from "@angular/core";
import { HeroeComponent } from "../heroe/heroe.component";
import { HeroesListComponent } from '../list/heroes-list/heroes-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    HeroeComponent,
    HeroesListComponent,
  ],
  exports:[
    HeroeComponent,
    HeroesListComponent,
  ],
  imports:[
    CommonModule
  ]
})

export class HeroeModule{

}
