import { AddComponent } from './../add/add.component';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationDet: any;
  buttondisable: boolean = true;
  tableRowData: any;
  data: any;
  addItem: any;
  itemToForm: any;
  constructor(private edu_detl: EmployeeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.edu_detl.getEducationDetails().subscribe((res: any) => {
      return (this.educationDet = res);
    });
  }

  openDialog() {
    const dialogRef = this.dialog
      .open(AddComponent, {
        disableClose: true,
      })
      .afterClosed()
      .subscribe((val) => {
        this.getData();
        this.buttondisable=true
      });
  }

  editEducationData(row: any) {
    this.dialog
      .open(AddComponent, {
        disableClose: true,
        data: this.tableRowData,
      })
      .afterClosed()
      .subscribe((val) => {
        this.getData();
        this.buttondisable=true
      });
  }

  clickingRadio(event: any) {
    this.buttondisable = false;
    this.tableRowData = JSON.parse(event.target.value);
    return this.tableRowData;
  }

  deleteEducation(data: any) {
    this.edu_detl
      .deleteEducation(this.tableRowData.id)
      .subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Details Deleted',
        });
        this.getData();
        this.buttondisable=true;
      });
  }
}
