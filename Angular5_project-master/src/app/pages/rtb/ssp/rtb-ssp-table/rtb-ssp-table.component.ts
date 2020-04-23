import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { RtbDataService } from '../../../../@core/data/rtb-data.service';
// import { RtbEndpoint2 } from '../../../../@core/models';
// import { StatusRenderComponent } from '../../../../@theme/components/status-render-component';

@Component({
  selector: 'adx-rtb-ssp-table',
  templateUrl: './rtb-ssp-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class RtbSSPTableComponent {

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
      id: {
        title: 'ID',
        type: 'number',
      },
      phases: {
        title: 'Phases',
        type: 'string',
      },
      supplyType: {
        title: 'Supply Type',
        type: 'string',
      },
      associated_user_id: {
        title: 'User ID',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
        editor: {
          type: 'checkbox',
          config: {
            true: '1',
            false: '0',
          },
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: RtbDataService, private router: Router) {
    this.service.getEndpoints2(100, 0).subscribe(data => {
      this.source.load(data);
    });
  }

  onCreate($event): void {
    this.router.navigate(['/pages/rtb/ssp/create']);
  }

  onEdit($event): void {
    this.router.navigate(['/pages/rtb/ssp/edit', { id: $event.data.id }]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
