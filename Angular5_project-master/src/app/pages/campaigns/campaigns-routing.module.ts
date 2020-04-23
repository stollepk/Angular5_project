import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns.component';
import { CampaignsTableComponent } from './campaigns-table/campaigns-table.component';
import { CampaignComponent } from './campaign/campaign.component';

const routes: Routes = [{
  path: '',
  component: CampaignsComponent,
  children: [{
    path: 'list',
    component: CampaignsTableComponent,
  }, {
    path: 'create',
    component: CampaignComponent,
  }, {
    path: 'edit/:id',
    component: CampaignComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule { }

export const routedComponents = [
  CampaignsComponent,
  CampaignsTableComponent,
  CampaignComponent,
];
