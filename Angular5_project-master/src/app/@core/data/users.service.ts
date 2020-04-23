import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { AdxApiService } from '../api/adx-api.service';
// import { HelperService } from '../utils/helper.service';

import { User, ProfileData, IdName } from '../models';

// let counter = 0;

@Injectable()
export class UserService {

  constructor(protected api: AdxApiService) {
  }

  getProfile(): Observable<ProfileData> {
    const currentUserOb = this.api.getCurrentUser();
    const constantsOb = this.api.getConstants();
    const settingsProfileOb = this.api.getSettingsProfile();

    return Observable.forkJoin([currentUserOb, constantsOb, settingsProfileOb])
      .map((data: any[]) => {
        const currentUser = data[0];
        const settingsProfile = data[2];

        const profileData = new ProfileData(currentUser);
        profileData.notifications.shortrage_report = settingsProfile.Notification.shortage;
        return profileData;
      });
  }

  updateProfile(profileData): Observable<any> {
    return this.api.updateProfile(profileData);
  }

  getCurrentUser(): Observable<User> {
    return this.api.getCurrentUser();
  }

  getAgency(userId): Observable<IdName[]> {
    return this.api.getUserAgency(userId);
  }

  getUserModuleNew(): Observable<any> {
    return this.api.getUserModuleNew();
  }
}
