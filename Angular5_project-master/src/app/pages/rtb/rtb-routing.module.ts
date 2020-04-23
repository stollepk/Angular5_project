import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtbComponent } from './rtb.component';
import { RtbTabComponent } from './tab/rtb-tab.component';
// import { RtbSSPComponent } from './ssp/rtb-ssp.component';
import { RtbSSPTableComponent } from './ssp/rtb-ssp-table/rtb-ssp-table.component';
// import { RtbSSPFormComponent } from './ssp/rtb-ssp-form/rtb-ssp-form.component';

const routes: Routes = [{
  path: '',
  component: RtbComponent,
  children: [{
    path: 'tab',
    component: RtbTabComponent,
  }, {
    path: 'ssp',
    loadChildren: './ssp/rtb-ssp.module#RtbSSPModule',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtbRoutingModule { }

export const routedComponents = [
  RtbComponent,
  RtbTabComponent,
  RtbSSPTableComponent,
];
