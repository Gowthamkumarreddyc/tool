import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from './../employee.service';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: EmployeeService;
  let mockLoggerSvc: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [EmployeeService],
    }).compileComponents();
  });

  beforeEach(() => {
    mockLoggerSvc = {
      info: jasmine.createSpy('info'),
      success: jasmine.createSpy('success'),
      error: jasmine.createSpy('error'),
    };
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(EmployeeService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get data', fakeAsync(() => {
    const data = [
      {
        id: 1,
        firstname: 'gowtham',
        lastname: 'kumar',
      },
    ];
    spyOn(service, 'get').and.returnValue(of(data));
    component.ngOnInit();
    expect(component.employee).toEqual(data);
  }));
});
