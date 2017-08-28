import { Component } from '@angular/core';
import { Hero } from "./hero";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  heroes: Hero[] = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta')
  ];

  myHero = this.heroes[0];

}
