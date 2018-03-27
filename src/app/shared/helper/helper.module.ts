import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './authentication/guardian';
import { SummaryPipe } from './pipe/summary.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SummaryPipe,
  ],
  providers: [
    AuthGuard,

  ]
})
export class HelperModule { }
