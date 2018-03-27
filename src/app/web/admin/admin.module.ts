import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDataComponent } from './master-data/master-data.component';
import { Routes, RouterModule } from '@angular/router';
import { FeatureLayoutComponent } from '../../shared/components/common/feature-layout/feature-layout.component';
import { IapCommonModule } from '../../shared/components/common/iap-common.module';
import { MaterialModule } from '../../shared/components/common/material.module';
import { AssurancePlanFrequencyComponent } from './master-data/assurance-plan-frequency/assurance-plan-frequency.component';
import { UserRoleComponent } from './master-data/user-role/user-role.component';


const routes: Routes = [
  {
    path: '',
    component: FeatureLayoutComponent,
    children: [
      { path: '', redirectTo: '/web/admin/master-data', pathMatch: 'full' },
      { path: 'master-data', component: MasterDataComponent, data: { state: 'master-data' } },
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IapCommonModule,
    MaterialModule
  ],
  declarations: [
    MasterDataComponent,
    AssurancePlanFrequencyComponent,
    UserRoleComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
