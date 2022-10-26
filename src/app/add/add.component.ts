import { EmployeeService } from './../employee.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  actionButton:string ="Submit";

  constructor(
    private fb: FormBuilder,
    private es:EmployeeService,
    @Inject(MAT_DIALOG_DATA) public editEducationData: any,
    private dialogRef: MatDialogRef<AddComponent>
  ) {}

  ngOnInit(): void {
    this.formControls();
    this.editFormDetails();
  }

  formControls() {
    this.addForm = this.fb.group({
      typeOfEstablishment: ['', Validators.required],
      majorField: ['', Validators.required],
      amount: ['', Validators.required],
      currency: ['', Validators.required],
      nameOfEstablishment: ['', Validators.required],
      minorField: ['', Validators.required],
      reimbursmentDate: ['', Validators.required],
      discipline: ['', Validators.required],
      affiliation: ['', Validators.required],
      breakExplaination: ['', Validators.required],
      passingYear: ['', Validators.required],
      addressOfInstitution: ['', Validators.required],
      upload: [''],
      grade: ['', Validators.required],
      attendedFrom: ['', Validators.required],
      level: ['', Validators.required],
      attendedTo: ['', Validators.required],
      subject: ['', Validators.required],
      companySponsored: ['', Validators.required],
    });
  }

  postAndUpdateEducationDetails(){
    if (!this.editEducationData) {
      if (this.addForm.valid) {
        this.es.addEducation(this.addForm.value).subscribe({
          next:(res)=>{
            alert("Education Details Added");
            this.addForm.reset();
            this.dialogRef.close('data added');
          },
          error:()=>{
            alert("Ouch!, Something bad happend");
          }
        })
      }
    } else {
      this.updateEducationDetails();
    }
  }


  editFormDetails() {
    if (this.editEducationData) {
      this.actionButton = "Update"
      this.addForm.controls['typeOfEstablishment'].setValue(this.editEducationData.typeOfEstablishment);
      this.addForm.controls['majorField'].setValue(this.editEducationData.majorField);
      this.addForm.controls['amount'].setValue(this.editEducationData.amount);
      this.addForm.controls['currency'].setValue(this.editEducationData.currency);
      this.addForm.controls['nameOfEstablishment'].setValue(this.editEducationData.nameOfEstablishment);
      this.addForm.controls['minorField'].setValue(this.editEducationData.minorField);
      this.addForm.controls['reimbursmentDate'].setValue(this.editEducationData.reimbursmentDate);
      this.addForm.controls['discipline'].setValue(this.editEducationData.discipline);
      this.addForm.controls['affiliation'].setValue(this.editEducationData.affiliation);
      this.addForm.controls['breakExplaination'].setValue(this.editEducationData.breakExplaination);
      this.addForm.controls['passingYear'].setValue(this.editEducationData.passingYear);
      this.addForm.controls['addressOfInstitution'].setValue(this.editEducationData.addressOfInstitution);
      this.addForm.controls['upload'].setValue(this.editEducationData.upload);
      this.addForm.controls['grade'].setValue(this.editEducationData.grade);
      this.addForm.controls['attendedFrom'].setValue(this.editEducationData.attendedFrom);
      this.addForm.controls['level'].setValue(this.editEducationData.level);
      this.addForm.controls['attendedTo'].setValue(this.editEducationData.attendedTo);
      this.addForm.controls['subject'].setValue(this.editEducationData.subject);
      this.addForm.controls['companySponsored'].setValue(this.editEducationData.companySponsored);
    }
  }

  updateEducationDetails() {
    this.es.updateEducation(this.addForm.value, this.editEducationData.id).subscribe({
      next:(res:any)=>{
        alert('Details updated successfully');
        this.addForm.reset();
        this.dialogRef.close('updated');
      },
      error:()=>{
        alert('Ouch!, Something bad happened');
      }
    })
  }
}
