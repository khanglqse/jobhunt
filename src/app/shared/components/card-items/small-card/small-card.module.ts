import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCommonModule } from '../card-common/card-common.module';
import { ActionItemComponent } from './action-item/action-item.component';
import { ApComponent } from './ap/ap.component';
import { AssessorComponent } from './assessor/assessor.component';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';
import { DeptAapComponent } from './dept-aap/dept-aap.component';
import { FindingsItemComponent } from './findings-item/findings-item.component';
import { OpuAapComponent } from './opu-aap/opu-aap.component';
import { SubmissionSummaryComponent } from './submission-summary/submission-summary.component';
import { ChartModule } from '../../chart/chart.module';

@NgModule({
  imports: [
    CommonModule,
    CardCommonModule,
    ChartModule
  ],
  declarations: [
    ActionItemComponent,
    ApComponent,
    AssessorComponent,
    ChecklistItemComponent,
    DeptAapComponent,
    FindingsItemComponent,
    OpuAapComponent,
    SubmissionSummaryComponent
  ],
  exports: [
    CardCommonModule,
    ActionItemComponent,
    ApComponent,
    AssessorComponent,
    ChecklistItemComponent,
    DeptAapComponent,
    FindingsItemComponent,
    OpuAapComponent,
    SubmissionSummaryComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmallCardModule { }
