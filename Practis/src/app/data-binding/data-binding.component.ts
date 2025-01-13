import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent 
{

  public Data:any;

  public SendData(data:any)
  {
    this.Data=data;
  }

  public Message:any;
}
