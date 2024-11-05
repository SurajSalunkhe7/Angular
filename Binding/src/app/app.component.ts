import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    public Str:any = "Marvellous";
    public Value:any;

    public Send(data:any)
    {
      this.Value = data;
    }
}
