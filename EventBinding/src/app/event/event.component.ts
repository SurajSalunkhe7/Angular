import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent 
{
  public Str:string = "";

    public Fun()
    {
      console.log("Inside Event Handler Function...");
    }

    public Gun()
    {
      this.Str = "Button Clicked...";
    }

    public Sun(Data:any)
    {
      console.log(Data);
    }
}
