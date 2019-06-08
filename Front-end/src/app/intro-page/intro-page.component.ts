import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  authorizationForm: FormGroup;

  ngOnInit() {
    this.authorizationForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  signIn(username, password) {
    username = this.authorizationForm.controls.username.value;
    password = this.authorizationForm.controls.password.value;
    if (username != null && password != null) {
      this.router.navigate(['/main']);
    }
  }
}
