import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssurancePlanComponent } from './assurance-plan/assurance-plan.component';
import { Routes, RouterModule } from '@angular/router';
import { AnnualAssurancePlanComponent } from './annual-assurance-plan.component';
import { SharedComponentModule } from '../../shared/components/shared-component.module';
import { AssurancePlanDialogComponent } from './assurance-plan/assurance-plan-dialog/assurance-plan-dialog.component';
import { AssuranceTabContentComponent } from './assurance-plan/assurance-tab-content/assurance-tab-content.component';
import {
  FindingActionTabComponent
} from './assurance-plan/assurance-tab-content/assurance-tab/finding-action-tab/finding-action-tab.component';
import { DetailTabComponent } from './assurance-plan/assurance-tab-content/assurance-tab/detail-tab/detail-tab.component';
import {
  WorkflowTrackingTabComponent
} from './assurance-plan/assurance-tab-content/assurance-tab/workflow-tracking-tab/workflow-tracking-tab.component';
import { AssuranceTabComponent } from './assurance-plan/assurance-tab-content/assurance-tab/assurance-tab.component';
import { LayoutComponent } from '../../core/layout/layout.component';
import { CoreModule } from '../../core/core.module';
import { ListCardItemModule } from '../../shared/components/list-card-item/list-card-item.module';
import { ChecklistDetailComponent } from './assurance-plan/checklist-detail/checklist-detail.component';
import { FeatureLayoutComponent } from '../../shared/components/common/feature-layout/feature-layout.component';
import { EditAssessorDialogComponent } from './assurance-plan/edit-assessor-dialog/edit-assessor-dialog.component';
import { IapCommonModule } from '../../shared/components/common/iap-common.module';
import { FindingsItemDetailComponent } from './assurance-plan/findings-item-detail/findings-item-detail.component';
import { ActionItemDetailComponent } from './assurance-plan/action-item-detail/action-item-detail.component';
import { DepAnnualAssurancePlanComponent } from '../dep-annual-assurance-plan/dep-annual-assurance-plan.component';
import {
  AnnualAssurancePlanListingComponent
} from '../dep-annual-assurance-plan/annual-assurance-plan-listing/annual-assurance-plan-listing.component';
import { AapSummaryComponent } from './aap-summary/aap-summary.component';
import { ResourceLoadingTabComponent } from './aap-summary/resource-loading-tab/resource-loading-tab.component';
import { CalendarTabComponent } from './aap-summary/calendar-tab/calendar-tab.component';
import { SubmissionSummaryTabComponent } from './aap-summary/submission-summary-tab/submission-summary-tab.component';
import { AapSummaryContentComponent } from './aap-summary/aap-summary-content/aap-summary-content.component';
import { DepartmentSubmissionComponent } from './aap-summary/submission-summary-tab/department-submission/department-submission.component';
import { SearchFilterDialogComponent } from './aap-summary/search-filter-dialog/search-filter-dialog.component';
import { SearchFilterComponent } from './aap-summary/search-filter-dialog/search-filter/search-filter.component';
import { ResourceLoadingCardComponent } from './aap-summary/resource-loading-tab/resource-loading-card/resource-loading-card.component';
import { ReactiveFormsModule } from '@angular/forms';

const AAProutes: Routes = [
  {
    path: '',
    component: FeatureLayoutComponent,
    children: [{
      path: '', redirectTo: '/web/annual-assurance-plan/main', pathMatch: 'full'
    }, {
      path: 'main', component: AnnualAssurancePlanComponent, data: { state: 'main' }
    }, {
      path: 'assurance-plan', component: AssurancePlanComponent, data: { state: 'assurance-plan' }
    }, {
      path: 'assurance-plan/checklist-detail', component: ChecklistDetailComponent,
    }, {
      path: 'dep-annual-assurance-plan', component: DepAnnualAssurancePlanComponent, data: { state: 'dep-annual-assurance-plan' }
    }, {
      path: 'annual-assurance-plan-listing',
      component: AnnualAssurancePlanListingComponent,
      data: { state: 'annual-assurance-plan-listing' }
    },
    { path: 'assurance-plan/findings-item-detail', component: FindingsItemDetailComponent, data: { state: 'findings-item-detail' } },
    { path: 'assurance-plan/action-item-detail', component: ActionItemDetailComponent, data: { state: 'action-item-detail' } },
    { path: 'summary', component: AapSummaryComponent, data: { state: 'summary' } },
    { path: 'summary/:tab', component: AapSummaryComponent, data: { state: 'summary' } },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AAProutes),
    ListCardItemModule,
    CommonModule,
    SharedComponentModule,
    IapCommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AssurancePlanComponent,
    AnnualAssurancePlanComponent,
    AssurancePlanDialogComponent,
    AssuranceTabContentComponent,
    FindingActionTabComponent,
    DetailTabComponent,
    WorkflowTrackingTabComponent,
    AssuranceTabComponent,
    EditAssessorDialogComponent,
    ChecklistDetailComponent,
    AapSummaryContentComponent,
    DepartmentSubmissionComponent,
    ResourceLoadingTabComponent,
    CalendarTabComponent,
    SubmissionSummaryTabComponent,
    SearchFilterComponent,
    ActionItemDetailComponent,
    FindingsItemDetailComponent,
    DepAnnualAssurancePlanComponent,
    AnnualAssurancePlanListingComponent,
    AapSummaryComponent,
    SearchFilterDialogComponent,
    ResourceLoadingCardComponent,
  ],
  entryComponents: [
    EditAssessorDialogComponent,
    AssurancePlanDialogComponent,
    SearchFilterDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnnualAssurancePlanModule { }
