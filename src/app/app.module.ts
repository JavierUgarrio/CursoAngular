import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroeModule } from './heroes/component/heroe.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
