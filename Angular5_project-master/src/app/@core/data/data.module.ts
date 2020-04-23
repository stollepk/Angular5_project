import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';

import { AdminDataService } from './admin-data.service';
import { BillingDataService } from './billing-data.service';
import { CampaignDataService } from './campaign-data.service';
import { ElectricityService } from './electricity.service';
import { PlayerService } from './player.service';
import { SmartTableService } from './smart-table.service';
import { StateService } from './state.service';
import { UserService } from './users.service';

const SERVICES = [
  AdminDataService,
  BillingDataService,
  CampaignDataService,
  ElectricityService,
  PlayerService,
  SmartTableService,
  StateService,
  UserService,
];

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
