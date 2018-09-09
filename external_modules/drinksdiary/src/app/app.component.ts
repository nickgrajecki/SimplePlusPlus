import { Component, OnInit } from '@angular/core';
import { CustomiseService } from './customise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }
  
  public title = 'Daily Drinks Diary';

  constructor(private customiseService: CustomiseService) {}
  newColour: boolean = false;
  tooltips: boolean = false;

  // Everything below is for header element styling

  homeColour = true;
  diaryColour = false;
  customiseColour = false;
  helpColour = false;

  hSelect() {
    this.homeColour = true;
    this.diaryColour = false;
    this.customiseColour = false;
    this.helpColour = false;
  }

  dSelect() {
    this.homeColour = false;
    this.diaryColour = true;
    this.customiseColour = false;
    this.helpColour = false;
  }

  cSelect() {
    this.diaryColour = false;
    this.homeColour = false;
    this.customiseColour = true;
    this.helpColour = false;
  }

  helpSelect() {
    this.diaryColour = false;
    this.homeColour = false;
    this.customiseColour = false;
    this.helpColour = true;
  }

}
