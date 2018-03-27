import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInputError } from './bad-input-error';
import { InternalError } from './internal-server-error';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
  rootUrl = 'http://localhost:6001/';

  constructor(private url, private http: HttpClient) {

  }

  getAll() {

    return this.http.get(this.rootUrl + this.url)
    .map(res => res)
    .catch(this.handleError);
  }

  create(resource) {

    return this.http.post(this.rootUrl + this.url, resource)
      .map(res => res)
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.put(this.rootUrl + this.url, resource)
      .map(res => res)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.rootUrl + this.url
      )
      .map(response => response)
      .catch(this.handleError);
  }
  deleteElement(lstItem: any, item: any) {
    const index = lstItem.findIndex((i) => (i === item));
    if (index !== -1) {
      lstItem.splice(index, 1);
    }
    return lstItem;
  }

  private handleError(error: any) {

    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
    } else if (error.status === 404) {
      return Observable.throw(new NotFoundError(error.json()));
    } else if (error.status === 500) {
      return Observable.throw(new InternalError(error.json()));
    }
    return Observable.throw(new AppError(error.json()));
  }
}
