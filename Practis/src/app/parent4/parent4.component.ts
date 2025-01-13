import { Component } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component 
{
  public Message:any;

  public SendData(data:any)
  {
    this.Message = data;
  }
}
