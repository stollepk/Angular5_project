import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import { AdminDataService } from '../../../../@core/data/admin-data.service';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'adx-admin-advertiser-form',
  styleUrls: ['./admin-advertiser-form.component.scss'],
  templateUrl: './admin-advertiser-form.component.html',
})
export class AdminAdvertiserFormComponent implements OnInit {
  user = {};
  agencies = [];
  selectedAgency = '';
  organizations = [];
  active_type = [];
  config: ToasterConfig;

  constructor(
    private service: AdminDataService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];

        this.getAdevertiser(id).subscribe(result => {
          this.selectedAgency = result.agency_user_id;
        });
      }
    });

    this.service.getUserModuleNew().subscribe(result => {
      if (result.organizations.length > 0) {
        const orgId = result.organizations[0].id;
        this.service.getAgency(orgId).subscribe(agencies => {
          this.agencies = agencies;
        });
      }
      this.active_type = result.active_type;
    });
  }

  getAdevertiser(id) {
    const getUserOb = this.service.getUserById2(id);
    const getOrganizationOb = this.service.getOrganizations(10000, 0);

    return Observable.forkJoin([getUserOb, getOrganizationOb])
      .map((data: any[]) => {
        const user = data[0];
        const organizations = data[2];
        this.user = user;
        this.organizations = organizations;
        return user;
      });
  }

  saveClicked(event) {
    this.service.saveUserModule(this.user).subscribe(result => {
      if (result.data.success) {
        this.showToast('info', 'Success', 'User data saved successfully.');
        setTimeout(() => {
          this.router.navigate(['/pages/admin/tabs/advertisers']);
        }, 5000);
      } else {
        this.showToast('error', 'Error', result.messasge);
      }
    });
  }

  cancelClicked(event) {
    this.router.navigate(['/pages/admin/tabs/advertisers']);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toaster.popAsync(toast);
  }

  navClicked(nav) {
    if (nav === 'admin') {
      this.router.navigate(['/pages/admin/tabs/users']);
    } else if (nav === 'advertisers') {
      this.router.navigate(['/pages/admin/tabs/advertisers']);
    }
  }
}
