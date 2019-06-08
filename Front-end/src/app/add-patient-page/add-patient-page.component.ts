import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-patient-page',
  templateUrl: './add-patient-page.component.html',
  styleUrls: ['./add-patient-page.component.css']
})
export class AddPatientPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
