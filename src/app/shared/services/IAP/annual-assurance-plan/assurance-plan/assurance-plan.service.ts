import { Injectable } from '@angular/core';
import { DataService } from '../../../data-service/data-service.service';
import { DialogHelperService } from '../../../dialog-helper/dialog-helper.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssurancePlanService extends DataService {

  constructor(http: HttpClient) {

    super('api/v1/assurancePlans', http);
  }
}
