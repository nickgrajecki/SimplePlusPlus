import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomiseService {

  constructor() { }

  newColour: boolean = false;
  tooltips: boolean = false;

  lowContrast(): boolean {
    return this.newColour = true;
  }

  highContrast(): boolean {
    return this.newColour = false;
  }

  tooltipsOn(): boolean {
    return this.tooltips = true;
  }

  tooltipsOff(): boolean {
    return this.tooltips = false;
  }
}
