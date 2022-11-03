import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EducationComponent } from './education.component';
import { of } from 'rxjs';

class dialogMock {
      open() {
        return {
          afterClosed: () => of({})
        };
      }
    }

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let service: EmployeeService;
  let dialog:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        EmployeeService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useClass: dialogMock},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(EmployeeService);
    dialog = TestBed.inject(MatDialog);
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
    spyOn(service, 'getEducationDetails').and.returnValue(of(data));
    component.getData();
    fixture.detectChanges();
    expect(component.educationDet).toEqual(data);
  }));

  it('should set buttonDisabled to false when source is checked and rowData to parsed event value', () => {
    const event = { target: { value: true }, value: '{"test": 1}' };
    component.clickingRadio(event);
    expect(component.buttondisable).toBe(false);
    expect(component.tableRowData).toEqual(true);
  });

  // it('should delete',()=>{
  //   let service =fixture.debugElement.injector.get(EmployeeService);
  //   const spy = spyOn(service, 'deleteEducation').and.returnValue(of(true));
  //   component.deleteEducation(1);
  //   expect(spy).toHaveBeenCalled();

  // })

  it('can opendialog box', () => {
    component.openDialog();
  });
  it('can editeducation', () => {
    component.editEducationData('');
  });
});
