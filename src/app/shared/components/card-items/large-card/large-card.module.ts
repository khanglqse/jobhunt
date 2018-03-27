import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCommonModule } from '../card-common/card-common.module';
import { AssurancePlanConsolidationComponent } from './assurance-plan-consolidation/assurance-plan-consolidation.component';
import { FieldworkReportingChecklistComponent } from './fieldwork-reporting-checklist/fieldwork-reporting-checklist.component';
import { CapCardComponent } from './cap-card/cap-card.component';

@NgModule({
  imports: [
    CommonModule,
    CardCommonModule,
  ],
  declarations: [
    AssurancePlanConsolidationComponent,
    FieldworkReportingChecklistComponent,
    CapCardComponent
  ],
  exports: [
    AssurancePlanConsolidationComponent,
    FieldworkReportingChecklistComponent,
    CapCardComponent,
  ]
})
export class LargeCardModule { }
