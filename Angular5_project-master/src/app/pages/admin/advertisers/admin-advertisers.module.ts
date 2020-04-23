import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';
import { AdminAdvertiserFormComponent } from './form/admin-advertiser-form.component';

@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
  ],
  declarations: [
    AdminAdvertiserFormComponent,
  ],
})
export class AdminAdvertisersModule { }
