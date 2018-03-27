import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';

@Component({
  selector: 'iap-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, AfterViewInit {
  @ViewChildren('input', { read: ElementRef }) inputs: QueryList<any>;
  @Input() value: number;
  @Input() disabled: boolean;
  componentId: number;
  listStar = [1, 2, 3, 4, 5];

  constructor(private elementRef: ElementRef) {
    this.componentId = Date.now() + Math.random() * 1000;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const checkedRadio = this.inputs.filter((radioInput: ElementRef) => {
      return +radioInput.nativeElement.value === this.value;
    });
    if (checkedRadio && checkedRadio.length > 0) {
      checkedRadio[0].nativeElement.setAttribute('checked', 'checked');
    }
  }
}
