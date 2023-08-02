import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent 
{
    public name:string = "Suraj Hanmant Salunkhe"; // characteristics

    public Displya():string    // Behaviour
    {
        var ret:string = "Hello : " + this.name;
        return ret;
    }

    public Addition(No1:number , No2:number):number
    {
      return No1 + No2;
    }
}
