import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink';
import { DiaryMainComponent } from '../diary-main/diary-main.component';
import { DrinkService } from '../drink.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css']
})
export class DiaryEntryComponent implements OnInit {

  constructor(private diaryMainComponent: DiaryMainComponent, private drinkService: DrinkService, private appComponent: AppComponent) { }

  @Input() drink: Drink;
  // This input statement allows data to flow into this component from elsewhere

  tooltips: boolean = this.appComponent.tooltips;

  ngOnInit() {
  }

  remove(drink: Drink): void {
    this.diaryMainComponent.drinks = this.diaryMainComponent.drinks.filter(h => h !== this.drink);
    this.drinkService.removeDrink(this.drink).subscribe();
  }
}
