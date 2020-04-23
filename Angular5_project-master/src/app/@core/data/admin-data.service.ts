import { Injectable } from '@angular/core';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import {
  IdName,
  Constants,
  NewUser,
  Organization,
  Organization2,
  Payment,
  User2,
  Permission2,
} from '../models';

@Injectable()
export class AdminDataService {
  constructor(
    private api: AdxApiService,
  ) {
  }

  /***** Advertiser *****/
  // updateAdvertiser(advertiser: Advertiser): Observable<Advertiser> {
  //   return this.api.updateAdvertiser(advertiser);
  // }

  // getAdvertisers(limit: number, offset: number): Observable<Advertiser[]> {
  //   return this.api.getAdvertisers(limit, offset);
  // }

  // getAdvertiserById(advertiserId: number): Observable<Advertiser> {
  //   return this.api.getAdvertiserById(advertiserId);
  // }

  /***** User *****/
  // updateUser(user: User): Observable<User> {
  //   return this.api.updateUser(user);
  // }

  // getUsers(limit: number, offset: number): Observable<User[]> {
  //   return this.api.getUsers(limit, offset);
  // }

  // getUserById(userId: number): Observable<Advertiser> {
  //   return this.api.getAdvertiserById(userId);
  // }

  /***** Organization *****/
  updateOrganization(organization: Organization): Observable<Organization> {
    return this.api.updateOrganization(organization);
  }

  getOrganizations(limit: number, offset: number): Observable<Organization2[]> {
    return this.api.getOrganizations(limit, offset);
  }

  getOrganizationById(id: number): Observable<Organization> {
    return this.api.getOrganizationById(id);
  }

  getPaymentNew(): Observable<Object> {
    return this.api.getPaymentNew();
  }

  getPayments(limit: number, offset: number): Observable<Payment[]> {
    return this.api.getPayments(limit, offset);
  }

  getUserById2(id: number): Observable<User2> {
    return this.api.getUserById2(id);
  }

  getPermissions(limit: number, offset: number, sort: string): Observable<Permission2[]> {
    return this.api.getPermissions2(limit, offset, sort);
  }

  getAgency(orgId): Observable<IdName[]> {
    return this.api.getUserAgency(orgId);
  }

  getUserModuleNew(): Observable<any> {
    return this.api.getUserModuleNew();
  }

  saveUserModule(userData): Observable<any> {
    return this.api.saveUserModule(userData);
  }

  getConstants(): Observable<Constants> {
    return this.api.getConstants();
  }

  getNewUser(): Observable<NewUser> {
    return this.api.getNewUser();
  }
}
