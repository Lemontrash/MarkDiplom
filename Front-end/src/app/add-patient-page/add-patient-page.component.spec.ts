import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientPageComponent } from './add-patient-page.component';

describe('AddPatientPageComponent', () => {
  let component: AddPatientPageComponent;
  let fixture: ComponentFixture<AddPatientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
