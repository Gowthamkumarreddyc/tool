import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from './../employee.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  addExpForm!: FormGroup;
  actionButton: string = 'Submit';

  constructor(
    private fb: FormBuilder,
    private es: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public editExperienceData: any,
    private dialogRef: MatDialogRef<EditComponent>
  ) {}

  ngOnInit(): void {
    this.formControls();
    this.editFormDetails();
  }

  formControls() {
    this.addExpForm = this.fb.group({
      companyName: ['', Validators.required],
      designationOnLeave: [''],
      experienceCertificate: [''],
      address: ['', Validators.required],
      industryType: [''],
      salarySlip: [''],
      fromDate: ['', Validators.required],
      contactNumber: [''],
      relievingLetter: [''],
      toDate: ['', Validators.required],
      roles: ['', Validators.required],
      jobTitle: ['', Validators.required],
      keyExperience: [''],
      salaryOnLeaving: ['', Validators.required],
      currency: [''],
      reasonForLeaving: ['', Validators.required],
    });
  }

  postAndUpdateExperienceDetails() {
    if (!this.editExperienceData) {
      if (this.addExpForm.valid) {
        this.es.addExperience(this.addExpForm.value).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Experience Details Added',
            });
            this.addExpForm.reset();
            this.dialogRef.close('data added');
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          },
        });
      }
    } else {
      this.updateExperienceDetails();
    }
  }

  editFormDetails() {
    if (this.editExperienceData) {
      this.actionButton = 'Update';
      this.addExpForm.controls['companyName'].setValue(
        this.editExperienceData.companyName
      );
      this.addExpForm.controls['designationOnLeave'].setValue(
        this.editExperienceData.designationOnLeave
      );
      this.addExpForm.controls['experienceCertificate'].setValue(
        this.editExperienceData.experienceCertificate
      );
      this.addExpForm.controls['address'].setValue(
        this.editExperienceData.address
      );
      this.addExpForm.controls['industryType'].setValue(
        this.editExperienceData.industryType
      );
      this.addExpForm.controls['salarySlip'].setValue(
        this.editExperienceData.salarySlip
      );
      this.addExpForm.controls['fromDate'].setValue(
        this.editExperienceData.fromDate
      );
      this.addExpForm.controls['contactNumber'].setValue(
        this.editExperienceData.contactNumber
      );
      this.addExpForm.controls['relievingLetter'].setValue(
        this.editExperienceData.relievingLetter
      );
      this.addExpForm.controls['toDate'].setValue(
        this.editExperienceData.toDate
      );
      this.addExpForm.controls['roles'].setValue(this.editExperienceData.roles);
      this.addExpForm.controls['jobTitle'].setValue(
        this.editExperienceData.jobTitle
      );
      this.addExpForm.controls['keyExperience'].setValue(
        this.editExperienceData.keyExperience
      );
      this.addExpForm.controls['salaryOnLeaving'].setValue(
        this.editExperienceData.salaryOnLeaving
      );
      this.addExpForm.controls['currency'].setValue(
        this.editExperienceData.currency
      );
      this.addExpForm.controls['reasonForLeaving'].setValue(
        this.editExperienceData.reasonForLeaving
      );
    }
  }

  updateExperienceDetails() {
    this.es
      .updateExperience(this.addExpForm.value, this.editExperienceData.id)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Details updated successfully',
          });
          this.addExpForm.reset();
          this.dialogRef.close('updated');
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        },
      });
  }

  get registerFormControl() {
    return this.addExpForm.controls;
  }
}
