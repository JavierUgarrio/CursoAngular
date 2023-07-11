import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { AddCharacterComponent } from './components/character/add-character/add-character.component';
import { DbzListComponent } from './components/list/dbz-list/dbz-list.component';




@NgModule({
  declarations:[
    MainPageComponent,
    AddCharacterComponent,
    DbzListComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class DbzModule { }
