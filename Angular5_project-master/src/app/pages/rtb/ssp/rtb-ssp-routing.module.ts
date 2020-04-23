import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtbSSPComponent } from './rtb-ssp.component';
import { RtbSSPFormComponent } from './rtb-ssp-form/rtb-ssp-form.component';

const routes: Routes = [{
  path: '',
  component: RtbSSPComponent,
  children: [{
    path: 'create',
    component: RtbSSPFormComponent,
  }, {
    path: 'edit',
    component: RtbSSPFormComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtbSSPRoutingModule {}
