import { Injectable } from '@angular/core';
import { Report } from '../models';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class ReportDataService {
  data = [{
    id: 1,
  }];

  constructor(
    private api: AdxApiService,
  ) {
  }

  // GET /reports
  getReports(limit: number, offset: number): Observable<Report[]> {
    return this.api.getReports(limit, offset);
  }

  // GET /reports/columns

  getData() {
    return this.data;
  }
}
