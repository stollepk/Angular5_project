import { Injectable } from '@angular/core';
// import { AdxApiService } from '../api/adx-api.service';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

// import {
//   GetCampaignsInterface,
// } from '../api/adx-api.interfaces';

@Injectable()
export class UserAgentListDataService {
  data = [{
    id: 1,
  }];

  constructor(
    // private api: AdxApiService,
  ) {
  }

  getData() {
    return this.data;
  }
}
