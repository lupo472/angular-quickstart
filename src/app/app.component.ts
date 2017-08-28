import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Angular';

  title: string;
  hero: string;

  constructor(){
    this.title = 'Tour of Heroes';
    this.hero = 'Windstorm';
  }
}
