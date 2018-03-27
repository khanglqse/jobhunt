import { Component, OnInit, Input ,ViewChild ,EventEmitter, Output } from '@angular/core';
import { AssurancePlan } from '../../../../models/IAP/annual-assurance-plan/assurance-plan.model';
import { MatDialog } from '@angular/material';
import { AssurancePlanDialogComponent } from '../../../../../web/annual-assurance-plan/assurance-plan/assurance-plan-dialog/assurance-plan-dialog.component';
import { AssurancePlanService } from '../../../../services/IAP/annual-assurance-plan/assurance-plan/assurance-plan.service';
import {  } from 'events';

@Component({
  selector: 'iap-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.scss']
})
export class ApComponent implements OnInit {
  @Input() assurance: AssurancePlan;
  @Output() onDeleteClick: EventEmitter<any> = new EventEmitter()

  constructor(
    private dialog: MatDialog,
    private assuranceService: AssurancePlanService) { }
  ngOnInit() {
  }
  edit() {
    const assuranceRef = this.dialog.open(AssurancePlanDialogComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      position: {
        top: '50px'
      },
      data: { assurance: this.assurance, isEdit: true }

    });
    assuranceRef.afterClosed().subscribe(data => {
      this.assurance = data;
    });
  }
  onDelete() {
    this.onDeleteClick.emit()
    // this.assuranceService.delete(this.assurance.id)
    //   .subscribe(res => this.onDeleteClick.emit());
  }


}
