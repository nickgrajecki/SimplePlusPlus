import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private drinkService: DrinkService
  ) { }

  ngOnInit() {
  }

  title = 'drinks diary';

  tooltips: boolean = this.appComponent.tooltips;

}
