import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { BackgroundLoader } from '../../shared/services/background-loader/background-loader.service';

@Component({
  selector: 'iap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  returnUrl;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    this.authenticationService.logout();
    this.titleService.setTitle('myAssurance | Authentication');
  }

  login() {
    if (!this.model.username || !this.model.password) {
      this.error = 'Login failed, please check your info and try again';
      return;
    }

    const user = this.model.username.toLowerCase();
    if (user !== 'leadassessor' && user !== 'approver' && user !== 'submitter' && user !== 'coordinator' && user !== 'apassigner') {
      this.error = 'Please login with username: submitter, coordinator, leadassessor, approver or apassigner';
      return;
    }

    if (!this.returnUrl || this.returnUrl === '') {
      this.router.navigate(['/web/my-task']);
    } else {
      this.router.navigateByUrl(this.returnUrl);
    }

    localStorage.setItem('currentUser', JSON.stringify({ username: this.model.username.toLowerCase(), token: 'token' }));
  }
}
