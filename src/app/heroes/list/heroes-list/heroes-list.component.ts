import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

public heroName:string[]= ['Spiderma','Batman', 'Hulk', 'Thor'];
public deleteHero?:string;

removeLastHero():void{
  this.deleteHero = this.heroName.pop();

}

}
