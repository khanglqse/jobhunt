import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssurancePlanDialogComponent } from './assurance-plan/assurance-plan-dialog/assurance-plan-dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'iap-annual-assurance-plan',
  templateUrl: './annual-assurance-plan.component.html',
  styleUrls: ['./annual-assurance-plan.component.scss']
})
export class AnnualAssurancePlanComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('myAssurance | Annual Assurance Plan');
  }

  openAssurancePlan() {
    const assuranceRef = this.dialog.open(AssurancePlanDialogComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      position: {
        top: '50px'
      },
    });
  }
}
