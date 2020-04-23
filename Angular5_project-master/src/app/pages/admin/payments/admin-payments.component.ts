import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { AdminDataService } from '../../../@core/data/admin-data.service';
// import { Payment } from '../../../@core/models';

@Component({
  selector: 'adx-admin-payments',
  templateUrl: './admin-payments.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdminPaymentsComponent {

  settings = {
    actions: {
      add: false,
      delete: false,
    },
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      username: {
        title: 'Name',
        type: 'string',
      },
      id: {
        title: 'ID',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      balance: {
        title: 'Balance',
        type: 'number',
      },
      credit: {
        title: 'Credit',
        type: 'number',
      },
      amount: {
        title: 'Amount',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdminDataService) {
    this.service.getPaymentNew().subscribe(utype => {
      this.service.getPayments(100, 0).subscribe(data => {
        this.source.load(data.map(item => {
          item.type = utype[item.utype] || 'Unknown';
          item.credit = 0;
          item.amount = 0;
          return item;
        }));
      });
    });
  }
}
