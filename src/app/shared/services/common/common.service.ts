import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }
  deleteElement(lstItem: any, item: any){
    var index = lstItem.findIndex((i) => (i===item));
    if (index != -1) {
      lstItem.splice(index, 1);
    }
    return lstItem;
  }
}
