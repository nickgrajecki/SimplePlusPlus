import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryMainComponent } from './diary-main/diary-main.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { CustomiseComponent } from './customise/customise.component';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
  { path: 'diary-main', component:DiaryMainComponent },
  { path: 'homescreen', component: HomescreenComponent },
  { path: 'customise', component: CustomiseComponent },
  { path: 'help', component: HelpComponent },
  { path: '', redirectTo: '/homescreen', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

