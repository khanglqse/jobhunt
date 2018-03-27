import { Component, OnInit, Input } from '@angular/core';
import { DialogHelperService } from '../../../../../../shared/services/dialog-helper/dialog-helper.service';
import { AssurancePlanDialogComponent } from '../../../assurance-plan-dialog/assurance-plan-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'iap-detail-tab',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent implements OnInit {
@Input() isSubmitter;
  constructor(private dialog : MatDialog) { }

  ngOnInit() {
    console.log(this.isSubmitter);
  }
 frequency : any[] = [
    { month: 'JAN', planned: '1' },
    { month: 'FEB', planned: '' },
    { month: 'MAR', planned: '2' },
    { month: 'APR', planned: '' },
    { month: 'MAY', planned: '' },
    { month: 'JUN', planned: '3' },
    { month: 'JUL', planned: '' },
    { month: 'AUG', planned: '' },
    { month: 'SEP', planned: '' },
    { month: 'OCT', planned: '1' },
    { month: 'NOV', planned: '' },
    { month: 'DEC', planned: '' },
  ];
  openAssurancePlan() {
    const assuranceRef = this.dialog.open(AssurancePlanDialogComponent, {
      width: '900px',
      position: {
        top: '60px'
      },
    });
  }
}
