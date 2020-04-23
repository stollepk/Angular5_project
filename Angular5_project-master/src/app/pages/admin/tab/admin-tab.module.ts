import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../../@theme/theme.module';
import { AdminDataService } from '../../../@core/data/admin-data.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
  ],
  providers: [
    AdminDataService,
  ],
})
export class AdminTabModule {}
