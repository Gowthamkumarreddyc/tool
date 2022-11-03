import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });
    service = TestBed.get(EmployeeService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created ', () => {
    expect(service).toBeDefined();
  });

  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.get().subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'GET',
    });
    expect(req.request.method).toEqual('GET');
    req.flush(data);
    httpController.verify();
  });

  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.getEducationDetails().subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'GET',
    });
    expect(req.request.method).toEqual('GET');
    req.flush(data);
    httpController.verify();
  });

  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.addEducation(1).subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'POST',
    });
    expect(req.request.method).toEqual('POST');
    req.flush(data);
    httpController.verify();
  });

  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.updateEducation(1, 1).subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'PUT',
    });
    expect(req.request.method).toEqual('PUT');
    req.flush(data);
    httpController.verify();
  });

  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.deleteEducation(1).subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'DELETE',
    });
    expect(req.request.method).toEqual('DELETE');
    req.flush(data);
    httpController.verify();
  });

  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service
      .getExperienceDetails()
      .subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'GET',
    });
    expect(req.request.method).toEqual('GET');
    req.flush(data);
    httpController.verify();
  });
  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.addExperience(1).subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'POST',
    });
    expect(req.request.method).toEqual('POST');
    req.flush(data);
    httpController.verify();
  });
  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service
      .updateExperience(1, 1)
      .subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'PUT',
    });
    expect(req.request.method).toEqual('PUT');
    req.flush(data);
    httpController.verify();
  });
  it('can test httpclient get', () => {
    const data = [
      {
        id: 1,
        firstName: 'gowtham',
        lastName: 'kumar',
      },
    ];
    service.deleteExperience(1).subscribe((res) => expect(res).toEqual(data));

    const req = httpController.expectOne({
      method: 'DELETE',
    });
    expect(req.request.method).toEqual('DELETE');
    req.flush(data);
    httpController.verify();
  });
});
