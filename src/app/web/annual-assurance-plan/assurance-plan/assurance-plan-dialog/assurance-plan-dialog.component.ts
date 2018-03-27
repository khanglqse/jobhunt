import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { AssurancePlan } from '../../../../shared/models/IAP/annual-assurance-plan/assurance-plan.model';
import { AssurancePlanService } from '../../../../shared/services/IAP/annual-assurance-plan/assurance-plan/assurance-plan.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogHelperService } from '../../../../shared/services/dialog-helper/dialog-helper.service';
import { AppError } from '../../../../shared/services/data-service/app-error';
import { Http } from '@angular/http';
import { NotFoundError } from '../../../../shared/services/data-service/not-found-error';

@Component({
  selector: 'iap-assurance-plan-dialog',
  templateUrl: './assurance-plan-dialog.component.html',
  styleUrls: ['./assurance-plan-dialog.component.scss'],
})
export class AssurancePlanDialogComponent implements OnInit {

  frequency: any[];
  form: FormGroup;
  assurance: AssurancePlan;
  isEdit = false;

  ngOnInit() {
    this.loadForm();
  }
  constructor(private assuranceService: AssurancePlanService,
    public fb: FormBuilder,
    private dialogHelper: DialogHelperService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AssurancePlanDialogComponent>) {
    if (data) {
      this.assurance = data.assurance || null;
      this.isEdit = data.isEdit || false;
    }
    this.frequency = [
      { month: 'JAN', planned: '' },
      { month: 'FEB', planned: '' },
      { month: 'MAR', planned: '' },
      { month: 'APR', planned: '' },
      { month: 'MAY', planned: '' },
      { month: 'JUN', planned: '' },
      { month: 'JUL', planned: '' },
      { month: 'AUG', planned: '' },
      { month: 'SEP', planned: '' },
      { month: 'OCT', planned: '' },
      { month: 'NOV', planned: '' },
      { month: 'DEC', planned: '' },
    ];
  }

  onSubmit() {
    // if action is edit
    if (this.isEdit) {
      this.assuranceService.update(this.form.value)
        .subscribe(res => {
          this.dialogRef.close(res)
        },
      );
    }
    // if action is create
    else {
      this.assuranceService.create(this.form.value)
        .subscribe(res => {
          // pass data to list ap to render new resource with out call api
          this.dialogRef.close(res);
        },
        (error: AppError) => {
          // handle expected error;
          if (error instanceof NotFoundError)
            this.dialogHelper.showError("This assurance doesnt exist");
          // or just log error message from server
          else {
            this.dialogHelper.showError(error.originalError.exceptionMessage);
          }
        });
    }

  }
  loadForm() {
    this.form = this.fb.group({
      id: this.newGuid(),
      refNo: '',
      status: '',
      year: '',
      title: 'default value for example',
      description: '',
      category: '',
      location: '',
      riskArea: '',
      type: '',
      subType: '',
    })

    if (this.data) {
      this.form.patchValue({
        id: this.assurance.id,
        title: this.assurance.title,
        description: this.assurance.description,
        category: this.assurance.category,
        status: this.assurance.status,
        location: this.assurance.location,
        riskArea: this.assurance.riskArea,
        type: this.assurance.type,
        subType: this.assurance.subType,
      });

    }
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
