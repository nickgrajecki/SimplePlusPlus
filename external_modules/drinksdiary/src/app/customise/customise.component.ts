import { Component } from '@angular/core';
import { CustomiseService } from '../customise.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html',
  styleUrls: ['./customise.component.css']
})
export class CustomiseComponent {

  constructor(
    private customiseService: CustomiseService, 
    private appComponent: AppComponent
  ) { }

  tooltips: boolean = this.appComponent.tooltips;

  highContrast() {
    this.appComponent.newColour = this.customiseService.highContrast();
  }

  lowContrast() {
    this.appComponent.newColour = this.customiseService.lowContrast();
  }
  
}
