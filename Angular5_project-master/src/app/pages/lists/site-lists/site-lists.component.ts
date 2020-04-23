import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { IpListDataService } from '../../../@core/data/ip-list-data.service';

@Component({
  selector: 'adx-ip-lists',
  templateUrl: './ip-lists.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class IpListsComponent {

  settings = {
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
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
      name: {
        title: 'Campaign',
        type: 'string',
      },
      daily_budget: {
        title: 'Budget',
        type: 'string',
      },
      remaining: {
        title: 'Remaining',
        type: 'string',
      },
      spendYd: {
        title: 'Spend Yd',
        type: 'string',
      },
      pace_td: {
        title: 'Spend Td',
        type: 'string',
      },
      id: {
        title: 'ID',
        type: 'number',
      },
      active: {
        title: 'Status',
        // type: 'custom',
        // component: StatusRenderComponent,
        type: 'number',
      },
      checkList: {
        title: 'Checklist',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: IpListDataService, private router: Router) {
    this.service.getCampaings(100, 0).subscribe(data => {
      this.source.load(data);
    });
  }

  onCreate($event): void {
    this.router.navigate(['/pages/campaigns/create']);
  }

  onEdit($event): void {
    this.router.navigate(['/pages/campaigns/edit', { id: $event.data.id }]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
