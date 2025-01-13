import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  templateUrl: './event-binding-demo.component.html',
  styleUrls: ['./event-binding-demo.component.css']
})
export class EventBindingDemoComponent 
{
  public Str:any;
  public SendData()
  {
    this.Str="Hello...";
  }
}
