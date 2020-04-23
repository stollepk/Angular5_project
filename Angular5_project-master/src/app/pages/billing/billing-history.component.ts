import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { BillingDataService } from '../../@core/data/billing-data.service';
// import { BillingHistory } from '../../@core/models';

@Component({
  selector: 'adx-billing-history',
  templateUrl: './billing-history.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class BillingHistoryComponent {

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
    mode: 'external',
    columns: {
      date: {
        title: 'Date',
        type: 'text',
        sort: true,
      },
      credit: {
        title: 'Credit',
        type: 'text',
        sort: true,
      },
      debit: {
        title: 'Debit',
        type: 'text',
        sort: true,
      },
      balance: {
        title: 'Balance',
        type: 'text',
        sort: true,
      },
      user: {
        title: 'User',
        type: 'text',
        sort: true,
      },
      organization: {
        title: 'Organization',
        type: 'text',
        sort: true,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BillingDataService) {
    this.service.getBillingHistory().subscribe(data => {
      this.source.load(data);
    });
  }
}
