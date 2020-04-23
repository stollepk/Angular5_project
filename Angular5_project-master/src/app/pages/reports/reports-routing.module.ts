import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReportsComponent } from './reports.component';
import { ReportsTableComponent } from './reports-table/reports-table.component';
// import { ReportChartComponent } from './reports-chart/reports-chart.component';

const routes: Routes = [{
  children: [{
    path: 'list',
    component: ReportsTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule { }

export const routedComponents = [
  ReportsTableComponent,
];
