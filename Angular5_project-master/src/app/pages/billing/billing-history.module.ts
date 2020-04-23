import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { BillingHistoryComponent } from './billing-history.component';
import { BillingDataService } from '../../@core/data/billing-data.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    BillingHistoryComponent,
  ],
  providers: [
    BillingDataService,
  ],
})
export class BillingHistoryModule { }
