import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent 
{
 public VegMenu:any;
 public NonVegMenu:any;

 Veg()
 {
  this.VegMenu = ["Panir", "Panir Masla", "Panir Tika"];
  // return this.VegMenu;
 }

 NonVeg()
 {
  this.NonVegMenu = ["Chicken" , "Chiken Tika" , "Chiken Masala"]
 }
}
