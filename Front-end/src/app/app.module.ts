import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from "@angular/router";
import { AddPatientPageComponent } from './add-patient-page/add-patient-page.component';

const routes = [
  {path:'', component: IntroPageComponent},
  {path:'main', component: MainPageComponent},
  {path: 'add-patient', component: AddPatientPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IntroPageComponent,
    AddPatientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
