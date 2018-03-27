import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {
  AssurancePlanDialogComponent
} from '../../../../web/annual-assurance-plan/assurance-plan/assurance-plan-dialog/assurance-plan-dialog.component';

import { AssurancePlanService } from '../../../services/IAP/annual-assurance-plan/assurance-plan/assurance-plan.service';
import { AssurancePlan } from '../../../models/IAP/annual-assurance-plan/assurance-plan.model';

@Component({
  selector: 'iap-list-ap',
  templateUrl: './list-ap.component.html',
  styleUrls: ['./list-ap.component.scss']
})
export class ListApComponent implements OnInit {

  constructor(private apService: AssurancePlanService, private dialog: MatDialog) { }
  assurancePlans: AssurancePlan[] = [];
  id;
  color = 'red';
  ngOnInit() {

    this.apService.getAll()
      .subscribe(res => this.assurancePlans = res.items);


  }
  onDelete(item) {
    this.apService.deleteElement(this.assurancePlans, item);
  }


  openAssurancePlan() {
    let assuranceRef = this.dialog.open(AssurancePlanDialogComponent, {
      width: '900px',
      position: {
        top: '60px'
      },
    });
    assuranceRef
      .afterClosed()
      .subscribe(ap => {
        if(ap){
          this.assurancePlans.push(ap);
        }
      });
  }
}
