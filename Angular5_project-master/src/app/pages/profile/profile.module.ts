import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [],
})
export class ProfileModule { }
