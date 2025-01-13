import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component 
{
  @Output() public Myevent = new EventEmitter();

  public Message:any;

  public SendData(data:any)
  {
    this.Message = data;

    this.Myevent.emit(this.Message);
  }
}
