import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employee: any;
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.get().subscribe((res) => {
      this.employee = res;
    });
  }
}
