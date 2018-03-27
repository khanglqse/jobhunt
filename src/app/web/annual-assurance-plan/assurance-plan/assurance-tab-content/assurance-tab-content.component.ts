import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'iap-assurance-tab-content',
  templateUrl: './assurance-tab-content.component.html',
  styleUrls: ['./assurance-tab-content.component.scss']
})
export class AssuranceTabContentComponent implements OnInit {
  @Input() isSubmitter;

  @Output() selectedIndex : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  ChangeHandler(index){
    this.selectedIndex.emit(index);
  }
}
