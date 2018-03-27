import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'iap-assurance-plan',
  templateUrl: './assurance-plan.component.html',
  styleUrls: ['./assurance-plan.component.scss']
})
export class AssurancePlanComponent implements OnInit {
  selectedTab = 0;
  isSubmitter = false;
  leadassessor = false;
  approver = false;
  apAssigner = false;
  currentUser: string;

  constructor(private router: Router,
    private authService: AuthenticationService,
    private http: HttpClient
  ) {

    this.currentUser = this.authService.getUserName();
    console.log(this.currentUser);

  }
  changeListContent(index) {
    this.selectedTab = index;
  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(s => console.log(s));
    this.isShow();
  }
  isShow() {
    if (this.currentUser === 'submitter') {
      this.isSubmitter = true;
    } else if (this.currentUser === 'leadassessor') {
      this.leadassessor = true;
    } else if (this.currentUser === 'approver') {
      this.approver = true;
    }else if (this.currentUser === 'apassigner') {
      this.apAssigner = true;
    }
  }
}



