import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'iap-submission-summary-tab',
  templateUrl: './submission-summary-tab.component.html',
  styleUrls: ['./submission-summary-tab.component.scss']
})
export class SubmissionSummaryTabComponent implements OnInit {

  data1: [any];
  data2: [any];
  data3: [any];
  data4: [any];

  isChartView: boolean;

  constructor() {
    this.isChartView = false;
  }

  ngOnInit() {
    this.data1 = [
      {
        'name': 'PTW',
        'value': 4
      },
      {
        'name': 'HSE',
        'value': 5
      },
      {
        'name': 'FC 2',
        'value': 9
      },
      {
        'name': 'FC3',
        'value': 4
      },
    ];
    this.data2 = [
      {
        'name': 'HSEMS',
        'value': 4
      },
      {
        'name': 'PSMS',
        'value': 5
      },
    ];
    this.data3 = [
      {
        'name': 'PTW',
        'value': 5
      },
      {
        'name': 'HSE',
        'value': 8
      },
      {
        'name': 'FC 2',
        'value': 9
      },
      {
        'name': 'FC 3',
        'value': 13
      },
    ];
    this.data4 = [
      {
        'name': 'PTW',
        'value': 4
      },
      {
        'name': 'HSE',
        'value': 5
      },
      {
        'name': 'FC 2',
        'value': 9
      },
      {
        'name': 'FC 3',
        'value': 4
      },
      {
        'name': 'FC 4',
        'value': 50
      },
    ];
  }

}


