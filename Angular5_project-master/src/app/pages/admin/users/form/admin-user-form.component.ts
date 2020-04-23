import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { AdminDataService } from '../../../../@core/data/admin-data.service';
// import { HelperService } from '../../../../@core/utils/helper.service';
import { User2, Organization2 } from '../../../../@core/models'

@Component({
  selector: 'adx-admin-user-form',
  styleUrls: ['./admin-user-form.component.scss'],
  templateUrl: './admin-user-form.component.html',
})
export class AdminUserFormComponent implements OnInit {
  user: User2 = new User2({});
  password: string = '';
  password2: string = '';
  advertisers: IMultiSelectOption[];
  selectedAdvertisers: number[];
  permission_methods = [];
  permissions = {};
  selectedPermissions = {};
  config: ToasterConfig;
  mode: string = '';
  active_type = [];
  title: string = '';
  organizations: Organization2[];

  // Settings configuration
  permissionSettings: IMultiSelectSettings = {
    checkedStyle: 'fontawesome',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
  };

  constructor(
    private service: AdminDataService,
    private route: ActivatedRoute,
    private router: Router,
    // private helper: HelperService,
    private toaster: ToasterService,
  ) {}

  ngOnInit() {
    this.active_type = [
      { id: 0, name: 'Inactive' },
      { id: 1, name: 'Active' }
    ];

    this.service.getOrganizations(10000, 0).subscribe(result => {
      this.organizations = result;
      this.advertisers = result.map(item => ({
        id: item.id,
        name: item.name,
      }));
    });

    this.service.getNewUser().subscribe(newUser => {
      const permission_methods = newUser.permission_methods;
      permission_methods.map(pm => {
        this.permissions[pm.id] = [];
        this.selectedPermissions[pm.id] = [];
      });
      newUser.permissions.map((item, index) => {
        permission_methods.map(pm => {
          this.permissions[pm.id].push(item);
        });
        this.selectedPermissions[item.default_value].push(item.id);
      });
      this.permission_methods = permission_methods;
    });

    if (this.route.snapshot.url[1].path === 'create') {
      this.user = new User2({
        active: 0,
        name: '',
        email: '',
        username: '',
        phone: '',
      })
      this.mode = 'create';
      this.title = 'Create New User';
    } else {
      this.route.params.subscribe(params => {
        if (params['id']) {
          const id = params['id'];
          this.service.getUserById2(id).subscribe(user => this.user = user);
          this.mode = 'edit';
          this.title = 'Edit User';
        } else {
          this.router.navigate(['/pages/admin/tabs/users']);
        }
      });
    }
  }

  onAdvertisersChange() {
    // console.log(this.selectedAdvertisers);
  }

  onPermissionsChange() {
    console.log(this.selectedPermissions);
  }

  saveClicked(event) {
    if (this.mode === 'create') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  cancelClicked(event) {
    this.router.navigate(['/pages/admin/tabs/users']);
  }

  navClicked(nav) {
    if (nav === 'users') {
      this.router.navigate(['/pages/admin/tabs/users']);
    } else if (nav === 'advertisers') {
      this.router.navigate(['/pages/admin/tabs/advertisers']);
    }
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

  private updateUser() {
    const userData = this.user;
    
      // subjects[0]:57293
      // Permission[permissions][2][value]:1
      // Permission[permissions][2][access]:update
      // Permission[permissions][3][value]:1
      // Permission[permissions][3][access]:update
      // Permission[permissions][4][value]:1
      // Permission[permissions][4][access]:update
      // Permission[permissions][5][value]:1
      // Permission[permissions][5][access]:update
      // Permission[permissions][6][value]:1
      // Permission[permissions][6][access]:update
      // Permission[permissions][11][value]:1
      // Permission[permissions][11][access]:update
      // Permission[permissions][12][value]:1
      // Permission[permissions][12][access]:update
      // Permission[permissions][13][value]:1
      // Permission[permissions][13][access]:update
      // Permission[permissions][14][value]:1
      // Permission[permissions][14][access]:update
      // Permission[permissions][16][value]:1
      // Permission[permissions][16][access]:update
      // Permission[permissions][27][value]:1
      // Permission[permissions][27][access]:update
      // Permission[permissions][33][value]:1
      // Permission[permissions][33][access]:update
      // Permission[organization][3][agency][57292][advertiser][57293][value]]:1

    this.service.saveUserModule(userData).subscribe(result => {
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

  private createUser() {
    const { active, name, email, username, phone } = this.user
    const userData = {
      name,
      email,
      username,
      phone,
      password: this.password,
      retypePassword: this.password2,
      active,
      // 'subjects[0]': 57293,
      utype: 0,
      subdomain_id: 2,
      // 'Permission[permissions][3][value]': 1,
      // 'Permission[permissions][3][access]': 'update',
      // 'Permission[organization][3][agency][57292][advertiser][57293][value]]': 1,
    }

    this.selectedAdvertisers.map((id, index) => {
      userData[`subjects[${index}]`] = id;
      const org = this.organizations.filter(item => item.id === id)[0];
      userData[`Permission[organization][3][agency][${org.agency_user_id}][advertiser][${id}][value]]`] = 1;
    });

    this.permission_methods.map(pm => {
      this.selectedPermissions[pm.id].map((id, index) => {
        userData[`Permission[permissions][${id}][value]`] = 1;
        userData[`Permission[permissions][${id}][access]`] = pm.id;
      })
    })

    // console.log(userData)
    this.service.saveUserModule(userData).subscribe(res => {
      this.router.navigate(['/pages/admin/tabs/users']);
    })
  }
}

