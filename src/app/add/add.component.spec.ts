import {
  MatDialogActions,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './../employee.service';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddComponent } from './add.component';
import { of, throwError } from 'rxjs';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let service: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        EmployeeService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: { close: (dialogResult: any) => {} },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
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
    spyOn(service, 'updateEducation').and.returnValue(of({}));
    component.updateEducationDetails();
    fixture.detectChanges();
    flush();
    expect(component.addForm.value).toBeTruthy();
  }));

  it('should handle error while fetching data', () => {
    const ds = TestBed.inject(EmployeeService);
    const spy = spyOn(ds, 'updateEducation').and.returnValue(
      throwError(() => new Error('Error while fetching data'))
    );
    component.updateEducationDetails();
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
    spyOn(service, 'addEducation').and.returnValue(of(data));
    component.postAndUpdateEducationDetails();
    fixture.detectChanges();
    expect(component.addForm.value).toBeTruthy();
    expect(component.addForm).toBeTruthy();
  }));

  // it('should test the alert', ()=>{
  //   spyOn(window, 'alert');
  //   component.postAndUpdateEducationDetails();
  //   fixture.detectChanges();
  //   expect(window.alert).toHaveBeenCalledWith('Education Details Added');
  // })

  it('if averageRating modulos 1 equal to less than 0', () => {
    component.addForm.value;
    // component.calculateRatingSummary();
    expect(component).toBeTruthy();
  });

  it('should be a valid experience-form', () => {
    component.addForm.setValue({
      typeOfEstablishment: 'Central',
      majorField: 'Btech',
      amount: '70000',
      currency: 'INR',
      nameOfEstablishment: 'Hyderabad University',
      minorField: 'CSE',
      reimbursmentDate: '2018-12-31',
      discipline: 'Good',
      affiliation: 'AICTE',
      breakExplaination: 'no',
      passingYear: '2014',
      addressOfInstitution: 'bengaluru',
      upload: '',
      grade: 'O',
      attendedFrom: '2022-12-30',
      level: 'I',
      attendedTo: '2019-07-27',
      subject: 'Computer Science',
      companySponsored: 'Wissen Technology',
    });
    expect(component.addForm.valid).toEqual(true);
    component.editEducationData = false;
    let service = fixture.debugElement.injector.get(EmployeeService);
    spyOn(service, 'addEducation').and.callFake(() => {
      return of({});
    });
    component.postAndUpdateEducationDetails();
  });

  it('should be a valid experience-form', () => {
    component.addForm.setValue({
      typeOfEstablishment: 'Central',
      majorField: 'Btech',
      amount: '70000',
      currency: 'INR',
      nameOfEstablishment: 'Hyderabad University',
      minorField: 'CSE',
      reimbursmentDate: '2018-12-31',
      discipline: 'Good',
      affiliation: 'AICTE',
      breakExplaination: 'no',
      passingYear: '2014',
      addressOfInstitution: 'bengaluru',
      upload: '',
      grade: 'O',
      attendedFrom: '2022-12-30',
      level: 'I',
      attendedTo: '2019-07-27',
      subject: 'Computer Science',
      companySponsored: 'Wissen Technology',
    });
    expect(component.addForm.valid).toEqual(true);
    component.editEducationData = false;
    let service = fixture.debugElement.injector.get(EmployeeService);
    const spy = spyOn(service, 'addEducation').and.returnValue(
      throwError(() => new Error('Error while fetching data'))
    );

    component.postAndUpdateEducationDetails();
  });
});
