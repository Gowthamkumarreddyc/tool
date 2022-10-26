import { EditComponent } from './../edit/edit.component';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceDet:any;
  buttondisable: boolean = true;
  tableRowData:any;
  data:any;

  constructor(private expdet:EmployeeService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.expdet.getExperienceDetails().subscribe((res:any)=>{
      return this.experienceDet = res;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditComponent, {
      disableClose:true
    }).afterClosed().subscribe(val=>{
      this.getData();
    })
  }

  editEXperienceData(row:any) {
    this.dialog.open(EditComponent,{
      disableClose:true,
      data:this.tableRowData
    }).afterClosed().subscribe(val=>{
      this.getData();
    })
  }

  clickingRadio(event:any) {
    this.buttondisable = false;
    this.tableRowData = JSON.parse(event.target.value)
    // console.log(this.tableRowData);
    return this.tableRowData;
  }

  deleteExperience(data:any){
    this.expdet.deleteExperience(this.tableRowData.id).subscribe((res:any)=>{
      alert('data deleted');
      this.getData();
    })
  }
}
