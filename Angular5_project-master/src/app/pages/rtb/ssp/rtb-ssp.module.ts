import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';

import { RtbSSPRoutingModule } from './rtb-ssp-routing.module';
import { RtbSSPComponent } from './rtb-ssp.component';
import { RtbSSPFormComponent } from './rtb-ssp-form/rtb-ssp-form.component';

@NgModule({
  imports: [
    ThemeModule,
    RtbSSPRoutingModule,
  ],
  declarations: [
    RtbSSPComponent,
    RtbSSPFormComponent,
  ],
  providers: [],
})
export class RtbSSPModule {}
