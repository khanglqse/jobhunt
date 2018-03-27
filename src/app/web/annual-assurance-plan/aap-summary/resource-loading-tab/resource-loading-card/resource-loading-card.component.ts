import { Component, OnInit, Input } from '@angular/core';
import { LIST_MONTH } from '../../../../../shared/constants/common.constants';

@Component({
  selector: 'iap-resource-loading-card',
  templateUrl: './resource-loading-card.component.html',
  styleUrls: ['./resource-loading-card.component.scss']
})
export class ResourceLoadingCardComponent implements OnInit {

  @Input() data: any;
  months: string[] = LIST_MONTH;
  constructor() { }

  ngOnInit() {
    this.data = {
      name: 'Abdullah Malik bin Safutan Zainal',
      refNos: ['AAP/MLNG/DEPTA/2018/FC/002', 'AAP/MLNG/DEPTA/2018/FC/002'],
      resources: [20, 8, 17, 0, 0, 0, 0, 5, 0, 200, 0, 0]
    };
  }

}
