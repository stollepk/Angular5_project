import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ReportsRoutingModule, routedComponents } from './reports-routing.module';
import { CampaignDataService } from '../../@core/data/campaign-data.service';

@NgModule({
  imports: [
    ThemeModule,
    ReportsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    CampaignDataService,
  ],
  entryComponents: [],
})
export class ReportsModule { }
