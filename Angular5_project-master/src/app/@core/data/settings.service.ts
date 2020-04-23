import { Injectable } from '@angular/core';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Profile } from '../models';

@Injectable()
export class SettingsService {

  constructor(private api: AdxApiService) {
  }

  getProfile(): Observable<Profile> {
    return this.api.getSettingsProfile();
  }
}
