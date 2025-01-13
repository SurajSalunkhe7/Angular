import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent 
{
  public Data:any;

    public Str:any;

    public SendData(data:any)
    {
      this.Str = data;
    }
}
