import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminTabComponent } from './tab/admin-tab.component';
import { AdminAdvertisersComponent } from './advertisers/admin-advertisers.component';
import { AdminUsersComponent } from './users/admin-users.component';
import { AdminPaymentsComponent } from './payments/admin-payments.component';
import { AdminAdvertisersListComponent } from './advertisers/list/admin-advertisers-list.component';
import { AdminAdvertiserFormComponent } from './advertisers/form/admin-advertiser-form.component';
import { AdminUsersListComponent } from './users/list/admin-users-list.component';
import { AdminUserFormComponent } from './users/form/admin-user-form.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'tabs',
    component: AdminTabComponent,
    children: [{
      path: 'advertisers',
      component: AdminAdvertisersListComponent,
    }, {
      path: 'users',
      component: AdminUsersListComponent,
    }],
  }, {
    path: 'advertisers/:id/edit',
    component: AdminAdvertiserFormComponent,
  }, {
    path: 'users/create',
    component: AdminUserFormComponent,
  }, {
    path: 'users/:id/edit',
    component: AdminUserFormComponent,
  }, {
    path: 'payments',
    component: AdminPaymentsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  AdminTabComponent,
  AdminAdvertisersComponent,
  AdminUsersComponent,
  AdminPaymentsComponent,
  AdminAdvertisersListComponent,
  AdminUsersListComponent,
];
