import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { UserControlInfo } from '../../shared/models/common.model';
import { Button } from '../../shared/models/buttons/button.model';
import { MatDialog } from '@angular/material';
import { RemarkDialogComponent } from '../../shared/components/dialog/remark-dialog/remark-dialog.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { IapHttpClient } from '../../shared/services/iap-http-client/iap-http-client.service';
import { APP_CONFIG } from '../../shared/services/app-config/app-config.service';
import { RequestDueDateDialogComponent } from '../../shared/components/dialog/request-due-date-dialog/request-due-date-dialog.component';
import { BreadscrumbItem } from '../../shared/models/breadscrumb/breadscrumb-item.model';

@Component({
  selector: 'iap-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  breadscrumbData: BreadscrumbItem[];

  constructor(
    private titleService: Title,
    private dialog: MatDialog,
  ) {
    this.titleService.setTitle('myAssurance | Dashboard');
  }

  ngOnInit() {
    this.breadscrumbData = [
      { name: 'My Items', url: '/web/my-task' },
      { name: 'Master Data', url: '/web/master-data' },
      { name: 'Dashboard', url: '/web/dashboard' },
      { name: 'Dashboard', url: '/web/dashboard' },
      { name: 'Dashboard', url: '/web/dashboard' },
      { name: 'Dashboard', url: '/web/dashboard' },
    ];
  }

  openRequestDueDate() {
    this.dialog.open(RequestDueDateDialogComponent, {
      width: '1000px',
      maxWidth: '80vw',
      maxHeight: '90vh',
      position: {
        top: '50px'
      }
    });
  }
}
