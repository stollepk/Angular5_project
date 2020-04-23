import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { RtbRoutingModule, routedComponents } from './rtb-routing.module';
import { RtbSSPModule } from './ssp/rtb-ssp.module';
import { RtbSSPRoutingModule } from './ssp/rtb-ssp-routing.module';
import { RtbDataService } from '../../@core/data/rtb-data.service';

@NgModule({
  imports: [
    ThemeModule,
    RtbRoutingModule,
    RtbSSPModule,
    RtbSSPRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    RtbDataService,
  ],
  entryComponents: [],
})
export class RtbModule {}
