import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EmployeeService } from '../employee.service';

import { ExperienceComponent } from './experience.component';

class dialogMock {
  open() {
    return {
      afterClosed: () => of({}),
    };
  }
}

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let service: EmployeeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent],
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
        { provide: MatDialog, useClass: dialogMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  it('should delete',()=>{
  //   let service =fixture.debugElement.injector.get(EmployeeService);
  //   const spy = spyOn(service, 'deleteExperience').and.returnValue(of(true));
  //   component.deleteExperience(1);
  //   expect(spy).toHaveBeenCalled();
  // })

  it('should set buttonDisabled to false when source is checked and rowData to parsed event value', () => {
    const event = { target: { value: true }, value: '{"test": 1}' };
    component.clickingRadio(event);
    expect(component.buttondisable).toBe(false);
    expect(component.tableRowData).toEqual(true);
  });

  it('can opendialog ', () => {
    component.openDialog();
  });
  it('can editExperience ', () => {
    component.editEXperienceData(1);
  });

  it('should get experience data', () => {
    let service = fixture.debugElement.injector.get(EmployeeService);
    spyOn(service, 'getExperienceDetails').and.callFake(() => {
      return of({
        name: 'gowtham',
        service: 'employee',
        date: '14th Feb',
      });
    });
    component.getData();
    expect(component.experienceDet).toEqual({
      name: 'gowtham',
      service: 'employee',
      date: '14th Feb',
    });
  });
});
