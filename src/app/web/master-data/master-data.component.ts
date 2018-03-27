import { Component, OnInit } from '@angular/core';
import { DialogHelperService } from '../../shared/services/dialog-helper/dialog-helper.service';

@Component({
  selector: 'iap-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit {
  constructor(private dialogHelper: DialogHelperService) { }

  ngOnInit() {
  }

  openDialog(type: number) {
    const dialogResult = this.dialogHelper.showConfirm('Confirmed');
    dialogResult.subscribe(result => {
      if (result) {
        console.log('Yes!!!');
      }
    });
  }

}
