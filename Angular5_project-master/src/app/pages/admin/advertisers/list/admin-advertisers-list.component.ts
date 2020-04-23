import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { AdminDataService } from '../../../../@core/data/admin-data.service';
import { HelperService } from '../../../../@core/utils/helper.service';

// import { Advertiser } from '../../../../@core/models';
// import { StatusRenderComponent } from '../../../../@theme/components/status-render-component';

@Component({
  selector: 'adx-admin-advertisers-list',
  templateUrl: './admin-advertisers-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class AdminAdvertisersListComponent implements OnInit {

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
      name: {
        title: 'Name',
        type: 'string',
      },
      id: {
        title: 'ID',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      balance: {
        title: 'Current Balance',
        type: 'string',
      },
      min_allowed_balance: {
        title: 'Credit',
        type: 'string',
      },
      margin: {
        title: 'Margin',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constants: any;

  constructor(private service: AdminDataService, private router: Router, private helper: HelperService) {
  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.source.load(data);
    });
  }

  getData() {
    const getConstantsOb = this.service.getConstants();
    const getOrganizationOb = this.service.getOrganizations(10000, 0);

    return Observable.forkJoin([getConstantsOb, getOrganizationOb])
      .map((data: any[]) => {
        this.constants = this.helper.convertArrayToObjectList(data[0]);
        const organizations = data[1];
        organizations.map(org => {
          org.margin = org.min_allowed_balance;
          org.status = this.constants.statuses[org.active].name;
        });
        return organizations;
      });
  }

  onEdit($event): void {
    this.router.navigate([`/pages/admin/advertisers/${$event.data.id}/edit`]);
  }

  onDeleteConfirm($event): void {
  }
}
