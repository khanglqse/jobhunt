import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FindingsDialogComponent } from './findings-dialog/findings-dialog.component';

@Component({
  selector: 'iap-list-findings-item',
  templateUrl: './list-findings-item.component.html',
  styleUrls: ['./list-findings-item.component.scss']
})
export class ListFindingsItemComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  openFindingDialog() {
    const findings = this.dialog.open(FindingsDialogComponent, {
      width: '1000px',
      maxWidth: '80vw',
      maxHeight: '90vh',
      position: {
        top: '50px'
      }
    });
  }
}
