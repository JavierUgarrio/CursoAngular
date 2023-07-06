
import { Component } from '@angular/core';

@Component({
    selector:'app-counter',
    template: `
    <h1>{{title}}</h1>
    <hr>
    <p>Counter : {{counter}}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    `

})
export class CounterComponent{
    public title:string = 'Hola Mundo';
    public counter:number =2;

    increaseBy( value: number):void{
        this.counter +=value;
    }

    reset():number{
        this.counter = 10;
        return this.counter;
    }


}

