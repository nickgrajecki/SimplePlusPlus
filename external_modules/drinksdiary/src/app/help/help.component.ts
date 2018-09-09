import { Component } from '@angular/core';
import { CustomiseService } from '../customise.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  constructor(
    private customiseService: CustomiseService, 
    private appComponent: AppComponent
  ) { }

  tooltips: boolean = this.appComponent.tooltips;

  tooltipsOn() {
    this.appComponent.tooltips = this.customiseService.tooltipsOn();
  }

  tooltipsOff() {
    this.appComponent.tooltips = this.customiseService.tooltipsOff();
  }

  enableMessage() {
    var enableMessageToggle = document.getElementById("enableMessageToggle");
    var disableMessageToggle = document.getElementById("disableMessageToggle");
    if (enableMessageToggle.style.display !== "block") {
      enableMessageToggle.style.display = "block";
      disableMessageToggle.style.display = "none";
    }
  }

  disableMessage() {
    var enableMessageToggle = document.getElementById("enableMessageToggle");
    var disableMessageToggle = document.getElementById("disableMessageToggle");
    if (enableMessageToggle.style.display !== "none") {
      enableMessageToggle.style.display = "none";
      disableMessageToggle.style.display = "block";
    }
  }

}
