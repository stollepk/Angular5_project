import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAgentListsComponent } from './user-agent-lists/user-agent-lists.component';

const routes: Routes = [{
  path: '',
  component: UserAgentListsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule { }
