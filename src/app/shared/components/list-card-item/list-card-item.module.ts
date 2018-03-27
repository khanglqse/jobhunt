import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAssessorComponent } from './list-assessor/list-assessor.component';
import { ListOpuAapComponent } from './list-opu-aap/list-opu-aap.component';
import { CardItemModule } from '../card-items/card-item.module';
import { ListAssurancePlanConsolidationComponent } from './list-assurance-plan-consolidation/list-assurance-plan-consolidation.component';
import { ListDeptAapComponent } from './list-dept-aap/list-dept-aap.component';
import { ListApComponent } from './list-ap/list-ap.component';
import { ListChecklistItemComponent } from './list-checklist-item/list-checklist-item.component';
import { ListActionItemComponent } from './list-action-item/list-action-item.component';
import { ListFindingsItemComponent } from './list-findings-item/list-findings-item.component';
import { SmallCardModule } from '../card-items/small-card/small-card.module';
import { FindingsDialogComponent } from './list-findings-item/findings-dialog/findings-dialog.component';
import { ActionDialogComponent } from './list-action-item/action-dialog/action-dialog.component';
import {
  ListFieldworkReportingChecklistComponent
} from './list-fieldwork-reporting-checklist/list-fieldwork-reporting-checklist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CardItemModule,
    RouterModule
  ],
  declarations: [
    ListAssessorComponent,
    ListOpuAapComponent,
    ListDeptAapComponent,
    ListAssurancePlanConsolidationComponent,
    ListApComponent,
    ListChecklistItemComponent,
    ListActionItemComponent,
    ListFindingsItemComponent,
    FindingsDialogComponent,
    ActionDialogComponent,
    ListFieldworkReportingChecklistComponent,
  ],
  exports: [
    ListAssessorComponent,
    ListOpuAapComponent,
    ListDeptAapComponent,
    ListAssurancePlanConsolidationComponent,
    ListApComponent,
    ListChecklistItemComponent,
    ListActionItemComponent,
    ListFindingsItemComponent,
    ListFieldworkReportingChecklistComponent,
  ],
  entryComponents: [
    FindingsDialogComponent,
    ActionDialogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListCardItemModule { }
