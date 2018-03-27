import { Component, OnInit } from '@angular/core';
import {
  RequestDueDateDialogComponent
} from '../../../../shared/components/dialog/request-due-date-dialog/request-due-date-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'iap-action-item-detail',
  templateUrl: './action-item-detail.component.html',
  styleUrls: ['./action-item-detail.component.scss']
})
export class ActionItemDetailComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  requestExtension() {
    this.dialog.open(RequestDueDateDialogComponent, {
      width: '1000px',
      maxWidth: '80vw',
      maxHeight: '90vh',
      position: {
        top: '50px'
      }
    });
  }
}
