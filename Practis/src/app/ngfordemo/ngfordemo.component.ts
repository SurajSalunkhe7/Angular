import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfordemo',
  templateUrl: './ngfordemo.component.html',
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent 
{
    NonVeg:any = ["Chiken", "Chiken Tika", "Chiken Masala","Chiken Gravi"];
    Veg:any = ["Panir", "Panir Tika", "Panir Masala","Panir Gravi"];
}
