import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';

@Component({
  selector: 'iap-list-action-item',
  templateUrl: './list-action-item.component.html',
  styleUrls: ['./list-action-item.component.scss']
})
export class ListActionItemComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openActionDialog() {
    const action = this.dialog.open(ActionDialogComponent, {
      width: '1000px',
      maxWidth: '80vw',
      maxHeight: '90vh',
      position: {
        top: '50px'
      }
    });
  }
}
