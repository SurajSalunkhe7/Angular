import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  title = 'Practis';

  Name = "Suraj";

  public Message:any;

  public SendData(data:any)
  {
    this.Message = data;
  }

  public Data:any;
}
