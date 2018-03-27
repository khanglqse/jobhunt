import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchFilterDialogComponent } from '../search-filter-dialog/search-filter-dialog.component';

@Component({
  selector: 'iap-resource-loading-tab',
  templateUrl: './resource-loading-tab.component.html',
  styleUrls: ['./resource-loading-tab.component.scss']
})
export class ResourceLoadingTabComponent implements OnInit {

  months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  data: any[];
  constructor(private dialog: MatDialog) {
    this.data = [
      {
        name: 'Abdullah Malik bin Safutan Zainal',
        refNos: ['AAP/MLNG/DEPTA/2018/FC/002', 'AAP/MLNG/DEPTA/2018/FC/002'],
        resources: [20, 8, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Abdullah Malik bin Safutan Zainal',
        refNos: [],
        resources: [0, 0, 0, 3, 0, 5, 0, 10, 0, 0, 0, 0]
      },
      {
        name: 'Abdullah Malik bin Safutan Zainal',
        refNos: [],
        resources: [20, 8, 17, 0, 0, 6, 0, 0, 0, 7, 0, 0]
      }
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
