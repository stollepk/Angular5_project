import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { AdminDataService } from '../../../../@core/data/admin-data.service';
// import { User } from '../../../../@core/models';
// import { StatusRenderComponent } from '../../../../@theme/components/status-render-component';

@Component({
  selector: 'adx-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdminUsersListComponent {

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
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'number',
      },
      id: {
        title: 'ID',
        type: 'string',
      },
      last_login: {
        title: 'Last Login',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdminDataService, private router: Router) {
    this.service.getPermissions(100, 0, 'id DESC').subscribe(data => {
      this.source.load(data);
    });
  }

  onCreate($event): void {
    this.router.navigate(['/pages/admin/users/create']);
  }

  onEdit($event): void {
    this.router.navigate([`/pages/admin/users/${$event.data.id}/edit`]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
