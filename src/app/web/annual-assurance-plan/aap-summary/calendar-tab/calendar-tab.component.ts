import { Component, OnInit } from '@angular/core';
import { SearchFilterDialogComponent } from '../search-filter-dialog/search-filter-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'iap-calendar-tab',
  templateUrl: './calendar-tab.component.html',
  styleUrls: ['./calendar-tab.component.scss']
})
export class CalendarTabComponent implements OnInit {

  data: any[];

  constructor(private dialog: MatDialog) {
    this.data = [
      { month: 'JAN', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'FEB', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'MAR', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'APR', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'MAY', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'JUN', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'JUL', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'AUG', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'SEP', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'OCT', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'NOV', urls: ['China - PL1', 'Proc Kerteh'] },
      { month: 'DEC', urls: ['China - PL1', 'Proc Kerteh'] }
    ];
  }

  ngOnInit() {
  }

  openFilter() {
    const action = this.dialog.open(SearchFilterDialogComponent, {
      width: '1000px',
      maxWidth: '80vw',
      maxHeight: '90vh',
      position: {
        top: '50px'
      }
    });
  }
}
