import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component 
{
  public Message:any;
  @Output() MyEvent = new EventEmitter();

  public SendData(data:any)
  {
    this.Message = data;
    this.MyEvent.emit(this.Message);
  }
}
