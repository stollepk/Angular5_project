import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CampaignsRoutingModule, routedComponents } from './campaigns-routing.module';
// import { CampaignsTableModule } from './campaigns-table/campaigns-table.module';
import { CampaignDataService } from '../../@core/data/campaign-data.service';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';
import { AttachSiteListsComponent } from './campaign/attach-site-lists/attach-site-lists.component';
import { AdSetsComponent } from './campaign/ad-sets/ad-sets.component';

@NgModule({
  imports: [
    ThemeModule,
    CampaignsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    CampaignFormComponent,
    AttachSiteListsComponent,
    AdSetsComponent,
  ],
  providers: [
    CampaignDataService,
  ],
})
export class CampaignsModule { }
