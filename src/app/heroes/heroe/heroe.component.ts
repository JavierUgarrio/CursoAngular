import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string ='Ironman';
  public age: number =18;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} `+ `- ${this.age}`;
  }

  changeName():string{
    this.name='Batman';
    return this.name;
  }

  changeAge():number{
    this.age = 25;
    return this.age;
  }

  reset():void{
    this.name = 'Ironman';
    this.age = 18;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }
}
