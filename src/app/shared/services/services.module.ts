import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BaseRequestOptions } from '@angular/http';

import { DialogHelperService } from './dialog-helper/dialog-helper.service';
import { AuthenticationService } from './authentication/authentication.service';
import { BackgroundLoader } from './background-loader/background-loader.service';
import { IapHttpClient } from './iap-http-client/iap-http-client.service';
import { AppConfigService } from './app-config/app-config.service';
import { DataService } from './data-service/data-service.service';
import { DemoService } from './demo-service/demo.service';
import { ScrollToElementService } from './scroll-to-element/scroll-to-element.service';
import { BreadscrumbResolver } from './breadscrumb-resolver/breadscrumb-resolver.service';
import { AssurancePlanService } from './IAP/annual-assurance-plan/assurance-plan/assurance-plan.service';
import { NotificationDialogComponent } from '../components/notification-dialog/notification-dialog.component';
import { SharedComponentModule } from '../components/shared-component.module';
import { CommonService } from './common/common.service';
import { InterceptorsModule } from '../interceptors/interceptors.module';

/**
* Exported function so that it works with AOT
* @param {AppConfigService} configService
* @returns {Function}
*/
export function loadConfigService(configService: AppConfigService): Function {
  return () => {
    return configService.load();
  };
}

@NgModule({
  imports: [
    CommonModule,
    SharedComponentModule, InterceptorsModule
  ],
  declarations: [
  ],
  providers: [
  ],
  entryComponents: [
    NotificationDialogComponent
  ]
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        DatePipe,
        CommonService,
        AuthenticationService,
        BaseRequestOptions,
        DialogHelperService,
        BackgroundLoader,
        IapHttpClient,
        AppConfigService,
        { provide: APP_INITIALIZER, useFactory: loadConfigService, deps: [AppConfigService], multi: true },
        ScrollToElementService,
        BreadscrumbResolver,


        DemoService,
        AssurancePlanService,
      ]
    };
  }
}

