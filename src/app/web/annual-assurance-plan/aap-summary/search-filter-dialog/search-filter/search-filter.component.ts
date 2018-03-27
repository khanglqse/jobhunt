import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iap-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  isAdvanced: boolean;
  constructor() {
    this.isAdvanced = false;
  }

  ngOnInit() {
  }

  toggleFilterAdvanced () {
    this.isAdvanced = !this.isAdvanced;
  }

}
