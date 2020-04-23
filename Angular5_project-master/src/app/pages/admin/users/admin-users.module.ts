import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ToasterModule } from 'angular2-toaster';
import { AdminUserFormComponent } from './form/admin-user-form.component';

@NgModule({
  imports: [
    ThemeModule,
    MultiselectDropdownModule,
    ToasterModule,
  ],
  declarations: [
    AdminUserFormComponent,
  ],
})
export class AdminUsersModule { }
