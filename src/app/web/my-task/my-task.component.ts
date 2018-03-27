import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';

@Component({
  selector: 'iap-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTaskComponent implements OnInit {
  user;
  constructor(private titleService: Title,
    private authService: AuthenticationService
  ) {
    this.titleService.setTitle('myAssurance | My Task');
  }

  ngOnInit() {
    this.user = this.authService.getUserName();
  }

}
