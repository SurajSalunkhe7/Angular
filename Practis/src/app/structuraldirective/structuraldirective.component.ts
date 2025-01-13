import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styleUrls: ['./structuraldirective.component.css']
})
export class StructuraldirectiveComponent 
{
  public Arr:any[] = [
    {"Name" : "Suraj", "Age" : 24, "Hight" : 165},
    {"Name" : "Kear", "Age" : 24, "Hight" : 167},
    {"Name" : "Abhi", "Age" : 23, "Hight" : 160}
  ];

  Str = false;

  public Batch = "LSP";
}
