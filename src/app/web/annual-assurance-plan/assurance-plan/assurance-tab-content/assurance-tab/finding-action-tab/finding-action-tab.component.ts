import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../../../../../shared/services/authentication/authentication.service';
import { RemarkDialogComponent } from '../../../../../../shared/components/dialog/remark-dialog/remark-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'iap-finding-action-tab',
  templateUrl: './finding-action-tab.component.html',
  styleUrls: ['./finding-action-tab.component.scss']
})
export class FindingActionTabComponent implements OnInit {
  @Input() isSubmitter;
  currentUser;
  isApprover = false;
  isLeadAssessor = false;
  isApAssigner = false;
  constructor(private authService: AuthenticationService, private dialog: MatDialog) {
    this.currentUser = this.authService.getUserName();
  }

  ngOnInit() {
    if (this.currentUser === 'approver') {
      this.isApprover = true;
    } else if (this.currentUser === 'leadassessor') {
      this.isLeadAssessor = true;
    } else if (this.currentUser === 'apassigner') {
      this.isApAssigner = true;
    }
  }

  openAssessorRatingDialog() {
    const assessorRating = this.dialog.open(RemarkDialogComponent, {
      width: '900px',
      position: {
        top: '60px'
      },
    });
  }

}
