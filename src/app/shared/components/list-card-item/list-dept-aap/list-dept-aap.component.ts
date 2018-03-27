import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'iap-list-dept-aap',
  templateUrl: './list-dept-aap.component.html',
  styleUrls: ['./list-dept-aap.component.scss']
})
export class ListDeptAapComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
}
