import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroPageComponent} from "./intro-page/intro-page.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes = [
  {path:'', component: IntroPageComponent},
  {path:'authorization', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
