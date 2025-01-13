import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent 
{
    public Str = "";
    public color:any = "pink";

    public ShowData()
    {
      this.Str="Button Press...";
    }
}
