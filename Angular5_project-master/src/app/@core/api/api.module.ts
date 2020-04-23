import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdxApiService } from './adx-api.service';

const SERVICES = [
  AdxApiService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ApiModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
