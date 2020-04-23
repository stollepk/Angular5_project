import { Injectable } from '@angular/core';
import { AdxApiService } from '../api/adx-api.service';
import { HelperService } from '../utils/helper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/delay';
import {
  // Constants,
  RtbEndpoint2,
} from '../models';

@Injectable()
export class RtbDataService {
  data = [{
    id: 1,
  }];

  constructor(private api: AdxApiService, private helper: HelperService) {}

  // GET SSP endpoint
  getEndpoints2(limit: number, offset: number): Observable<RtbEndpoint2[]> {
    const rtbNewOb = this.api.getRtbNew();
    const constantsOb = this.api.getConstants();
    const rtbEndpointsOb = this.api.getRtbEndpoins(limit, offset);

    return Observable.forkJoin([rtbNewOb, constantsOb, rtbEndpointsOb])
      .map((data: any[]) => {
        const rtbNew = this.helper.convertArrayToObjectList(data[0]);
        // const constants = this.helper.convertArrayToObjectList(data[1]);
        const rtbEndpoints: any[] = data[2];

        return rtbEndpoints.map(ep => {
          ep.supplyType = rtbNew.supply_type[ep.supply_type].name;
          // ep.phase = rtbNew.test_mode_new[ep.test_mode].name;
          return ep;
        });
      });
  }

  getRtbNew(): Observable<Object> {
    return this.api.getRtbNew();
  }

  getData() {
    return this.data;
  }
}
