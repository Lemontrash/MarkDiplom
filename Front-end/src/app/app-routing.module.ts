import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroPageComponent} from "./intro-page/intro-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AddPatientPageComponent} from "./add-patient-page/add-patient-page.component";

const routes = [
  {path:'', component: IntroPageComponent},
  {path:'authorization', component: MainPageComponent},
  {path:'add-patient', component: AddPatientPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
