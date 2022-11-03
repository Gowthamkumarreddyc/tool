import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditComponent } from './edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let service: EmployeeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        EmployeeService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {close:(dialogResult:any)=>{}} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get updateeducation', fakeAsync(() => {
    const data = [
      {
        id: 1,
        firstname: 'gowtham',
        lastname: 'kumar',
      },
    ];
    spyOn(service, 'updateExperience').and.returnValue(of(data));
    component.updateExperienceDetails();
    fixture.detectChanges();
    expect(component.addExpForm).toBeTruthy();
  }));

  it('should handle error while fetching data', () => {

    const ds = TestBed.inject(EmployeeService);
    const spy = spyOn(ds, 'updateExperience').and.returnValue(throwError(()=> new Error('Error while fetching data')));
    component.updateExperienceDetails();
    expect(spy).toHaveBeenCalled();

  });

  it('can get addEducation', fakeAsync(() => {
    const data = [
      {
        id: 1,
        firstname: 'gowtham',
        lastname: 'kumar',
      },
    ];
    spyOn(service, 'addExperience').and.returnValue(of(data));
    component.postAndUpdateExperienceDetails();
    fixture.detectChanges();
    expect(component.addExpForm).toBeTruthy();
  }));

  it('should be a valid experience-form', () => {

    component.addExpForm.setValue({

      "companyName": "wissen",
      "designationOnLeave": "architect",
      "experienceCertificate": "",
      "address": "bengaluru",
      "industryType": "IT",
      "salarySlip": "",
      "fromDate": "2022-10-07",
      "contactNumber": "9987765443",
      "relievingLetter": "",
      "toDate": "2022-10-30",
      "roles": "development",
      "jobTitle": "architect",
      "keyExperience": "development",
      "salaryOnLeaving": "400000",
      "currency": "INR",
      "reasonForLeaving": "development",

    })
    expect(component.addExpForm.valid).toEqual(true);
    component.editExperienceData = false;
    let service = fixture.debugElement.injector.get(EmployeeService);
    spyOn(service, 'addExperience').and.callFake(() => {
      return of({});
    });
    component.postAndUpdateExperienceDetails();
  });

  it('should be a valid experience-form', () => {

    component.addExpForm.setValue({

      "companyName": "wissen",
      "designationOnLeave": "architect",
      "experienceCertificate": "",
      "address": "bengaluru",
      "industryType": "IT",
      "salarySlip": "",
      "fromDate": "2022-10-07",
      "contactNumber": "9987765443",
      "relievingLetter": "",
      "toDate": "2022-10-30",
      "roles": "development",
      "jobTitle": "architect",
      "keyExperience": "development",
      "salaryOnLeaving": "400000",
      "currency": "INR",
      "reasonForLeaving": "development",

    })
    expect(component.addExpForm.valid).toEqual(true);
    component.editExperienceData = false;
    let service = fixture.debugElement.injector.get(EmployeeService);
    const spy = spyOn(service, "addExperience").and.returnValue(throwError(()=> new Error('Error while fetching data')));
    component.postAndUpdateExperienceDetails();
  });
});
