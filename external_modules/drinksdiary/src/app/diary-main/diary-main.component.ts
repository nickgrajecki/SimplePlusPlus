import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';
import { AppComponent } from '../app.component';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-diary-main',
  templateUrl: './diary-main.component.html',
  styleUrls: ['./diary-main.component.css']
})
export class DiaryMainComponent implements OnInit {

  constructor(
    private drinkService: DrinkService, 
    private appComponent: AppComponent
  ) { }

  // The below 'ngOnInit()' method is a lifecycle hook that initiates when the component is loaded.
  // It instructs this component to grab drinks data from the server.

  ngOnInit() {
    this.getDrinks();
  }
  
  tooltips: boolean = this.appComponent.tooltips;

  drinks: Drink[];

  // allows the detail panel to display the details of a specific drink upon user selection

  selectedDrink: Drink;

  onSelect(drink: Drink): void {
    this.selectedDrink = drink;
  }

  // 'subscribe()' allows an observer to connect, or 'subscribe' to an Observable object

  getDrinks(): void {
    this.drinkService.getDrinks().subscribe(drinks => this.drinks = drinks.reverse());
  }

  add(): void {

    // remove the below line if you want to pass the string as an argument of the add method
    // this is useful if switching from a drop-down menu to manual text entry

    var name = (<HTMLInputElement>document.getElementById("selectMenu")).value;

    // probably a poor idea to identify user selection by using a DOM styling

    var x = document.getElementById("smallSelected");
    var y = document.getElementById("mediumSelected");
    var z = document.getElementById("largeSelected");

    var size = "0";

    if (x.style.border == "1px solid black") 
    {
      size = "Small (100ml)";
      this.drinkService.addDrink({name, size} as Drink).subscribe(drink => { this.drinks.unshift(drink);})
    } 

    else if (y.style.border == "1px solid black") 
    {
      size = "Medium (half pint / 250ml)";
      this.drinkService.addDrink({name, size} as Drink).subscribe(drink => { this.drinks.unshift(drink);})
    } 

    else if (z.style.border == "1px solid black") 
    {
      size = "Large (1 pint / 500ml)";
      this.drinkService.addDrink({name, size} as Drink).subscribe(drink => { this.drinks.unshift(drink);})
    } else {
      size = "No size selected"
      this.drinkService.addDrink({name, size} as Drink).subscribe(drink => { this.drinks.unshift(drink);})
    }

    //this.drinkService.addDrink({name, volume} as Drink).subscribe(drink => { this.drinks.unshift(drink);})
    // bug: add method doesn't work when the array is empty
  }

  // use something like 'selected element' instead of this inelegant styling?

  selectedSmallSize() {
    var x = document.getElementById("smallSelected");
    var y = document.getElementById("mediumSelected");
    var z = document.getElementById("largeSelected");
    if (x.style.border !== "1px solid black") {
      x.style.border = "1px solid black";
      y.style.border = "0";
      z.style.border = "0";
    }
  }

  selectedMediumSize() {
    var x = document.getElementById("smallSelected");
    var y = document.getElementById("mediumSelected");
    var z = document.getElementById("largeSelected");
    if (y.style.border !== "1px solid black") {
      x.style.border = "0";
      y.style.border = "1px solid black";
      z.style.border = "0";
    }
  }

  selectedLargeSize() {
    var x = document.getElementById("smallSelected");
    var y = document.getElementById("mediumSelected");
    var z = document.getElementById("largeSelected");
    if (z.style.border !== "1px solid black") {
      x.style.border = "0";
      y.style.border = "0";
      z.style.border = "1px solid black";
    }
  }
}
