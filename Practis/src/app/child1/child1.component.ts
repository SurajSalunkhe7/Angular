import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component 
{
  public Message:any = "Hello Child";
  @Output() public Myevent = new EventEmitter();

  public SendData()
  {
    this.Myevent.emit(this.Message);
  }
}
