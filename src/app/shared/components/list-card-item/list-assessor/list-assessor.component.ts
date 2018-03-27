import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {
  EditAssessorDialogComponent
} from '../../../../web/annual-assurance-plan/assurance-plan/edit-assessor-dialog/edit-assessor-dialog.component';

@Component({
  selector: 'iap-list-assessor',
  templateUrl: './list-assessor.component.html',
  styleUrls: ['./list-assessor.component.scss']
})
export class ListAssessorComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAssessorDialog() {
    const assuranceRef = this.dialog.open(EditAssessorDialogComponent, {
      width: '900px',
      position: {
        top: '60px'
      },
    });
  }

}
