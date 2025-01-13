import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-x',
  templateUrl: './directive-x.component.html',
  styleUrls: ['./directive-x.component.css']
})
export class DirectiveXComponent 
{
    public Arr:number[] = [10,20,30,40,50];

    public flag = true;

    public Menu = false;

    public Batch = "Java";
}
