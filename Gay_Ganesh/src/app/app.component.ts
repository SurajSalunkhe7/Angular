import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'GayGanesh';

  Name : string = "Suraj";

  Age():number
  {
    var age:number = 23;
    return age;
  }
}
