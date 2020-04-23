import { Injectable } from '@angular/core';
import { BillingHistory } from '../models';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class BillingDataService {
  data = [];

  constructor(
    private api: AdxApiService,
  ) {
  }

  getBillingHistory(): Observable<BillingHistory[]> {
    return this.api.getBillingHistory();
  }

  getData() {
    return this.data;
  }
}
