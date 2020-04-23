import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {
  Agency,
  BillingHistory,
  Campaign,
  Constants,
  NewUser,
  Organization,
  Organization2,
  Payment,
  Profile,
  Report,
  RtbEndpoint2,
  User,
  User2,
  Permission2,
  IdName,
} from '../models';
import {
  GetAgenciesInterface,
  GetBillingInterface,
  GetCampaignsInterface,
  GetConstantsInterface,
  GetOrganizationInterface2,
  GetPaymentNewInterface,
  GetPaymentsInterface,
  GetPermissionsInterface,
  GetReportsInterface,
  GetRtbNewInterface,
  GetRtbEndpointsInterface2,
  GetUserInterface,
  GetUserInterface2,
  GetUserModuleNewInterface,
  SaveUserModuleInterface,
  GetUserAgencyInterface,
  GetSettingsProfileInterface,
  UpdateProfileInterface,
} from './adx-api.interfaces';

const API_V1_URL = environment.apiV1Url;
const API_V102_URL = environment.apiV102Url;
const API_URL = environment.apiUrl;
const API_MODULE_URL = environment.apiModuleUrl;

@Injectable()
export class AdxApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private formData(data) {
    return Object.keys(data).reduce((prev, key) => {
      return prev.set(key, data[key]);
    }, new HttpParams());
  }

  public getConstants(): Observable<Constants> {
    return this.http
      .get<GetConstantsInterface>(`${API_V102_URL}/constants`)
      .map(result => new Constants(result.data))
      .catch(this.handleError);
  }

  // Billing History
  public getBillingHistory(): Observable<BillingHistory[]> {
    return this.http
      .put<GetBillingInterface>(`${API_URL}/Billing/billing/`, {})
      .map(result => result.response.data.map(item => new BillingHistory(item)))
      .catch(this.handleError);
  }

  // Campaigns
  public getCampaigns(limit: number, offset: number): Observable<Campaign[]> {
    const params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetCampaignsInterface>(`${API_V1_URL}/campaigns`, { params })
      .map(result => result.data.map(campaign => new Campaign(campaign)))
      .catch(this.handleError);
  }

  public createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .post(`${API_V1_URL}/campaigns`, campaign)
      .map(() => campaign)
      .catch(this.handleError);
  }

  public getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http
      .get<Campaign>(`${API_V1_URL}/campaigns/${campaignId}`)
      .map(response => {
        return new Campaign(response);
      })
      .catch(this.handleError);
  }

  public updateCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .put(`${API_V1_URL}/campaigns/${campaign.id}`, campaign)
      .map(response => campaign)
      .catch(this.handleError);
  }

  public deleteCampaignById(campaignId: number): Observable<null> {
    return this.http
      .delete(`${API_V1_URL}/campaigns/${campaignId}`)
      .map(response => null)
      .catch(this.handleError);
  }

  // Reports
  public getReports(limit: number, offset: number): Observable<Report[]> {
    const params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetReportsInterface>(`${API_V1_URL}/reports`, { params })
      .map(result => result.data.map(item => new Report(item)))
      .catch(this.handleError);
  }

  // Admin - Organizations
  public getOrganizations(limit: number, offset: number): Observable<Organization2[]> {
    const params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetOrganizationInterface2>(`${API_MODULE_URL}/UsersModule/organizations/`, { params })
      .map(result => result.response.data.map(item => new Organization2(item)))
      .catch(this.handleError);
  }

  public updateOrganization(organizaion: Organization): Observable<Organization> {
    return this.http
      .put(`${API_MODULE_URL}/UsersModule/organizations` + organizaion.id, organizaion)
      .map(response => organizaion)
      .catch(this.handleError);
  }

  public getOrganizationById(id: number): Observable<Organization> {
    return this.http
      .get<Organization>(`${API_MODULE_URL}/UsersModule/organizations/${id}`)
      .map(response => {
        return new Organization(response);
      })
      .catch(this.handleError);
  }

  // Admin - Agencies
  public getAgencies(organizationId: number, limit: number, offset: number): Observable<Agency[]> {
    const params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetAgenciesInterface>(`${API_V1_URL}/agencies/${organizationId}`, { params })
      .map(result => result.data.map(agency => new Agency(agency)))
      .catch(this.handleError);
  }

  public updateAgency(agency: Agency): Observable<Agency> {
    return this.http
      .put(`${API_URL}/agencies/${agency.id}`, agency)
      .map(response => agency)
      .catch(this.handleError);
  }

  public getAgencyById(organizationId: number, agencyId: number): Observable<Agency> {
    return this.http
      .get<Agency>(`${API_URL}/organizations/${organizationId}/agencies/${agencyId}`)
      .map(response => {
        return new Agency(response);
      })
      .catch(this.handleError);
  }

  // Admin - RTB Endpooints
  public getRtbNew(): Observable<Object> {
    return this.http
      .get<GetRtbNewInterface>(`${API_MODULE_URL}/Rtb/new/`)
      .map(result => result.response.data)
      .catch(this.handleError);
  }

  public getRtbEndpoins(limit: number, offset: number): Observable<RtbEndpoint2[]> {
    const params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetRtbEndpointsInterface2>(`$${API_MODULE_URL}/rtb`, { params })
      .map(result => result.response.data.map(item => new RtbEndpoint2(item)))
      .catch(this.handleError);
  }

  // Admin - Payment
  public getPaymentNew(): Observable<Object> {
    return this.http
      .get<GetPaymentNewInterface>(`${API_MODULE_URL}/Payment/new`)
      .map(result => result.response.data.utype)
      .catch(this.handleError);
  }

  public getPayments(limit: number, offset: number): Observable<Payment[]> {
    const params = new HttpParams()
    .set('limit', String(limit))
    .set('offset', String(offset));

    return this.http
      .get<GetPaymentsInterface>(`${API_MODULE_URL}/Payment/`, { params })
      .map(result => result.response.data.map(item => new Payment(item)))
      .catch(this.handleError);
  }

  // Admin - Permission
  public getPermissions2(limit: number, offset: number, sort: string): Observable<Permission2[]> {
    const params = new HttpParams()
    .set('limit', String(limit))
    .set('offset', String(offset))
    .set('sort', String(sort));

    return this.http
      .get<GetPermissionsInterface>(`${API_MODULE_URL}/UsersModule/permissions/`, { params })
      .map(result => result.response.data.map(item => new Permission2(item)))
      .catch(this.handleError);
  }

  // Users
  public getCurrentUser(): Observable<User> {
    return this.http
      .get<GetUserInterface>(`${API_URL}/Users/current/`)
      .map(result => new User(result.response.data))
      .catch(this.handleError);
  }

  public updateProfile(profileData): Observable<any> {
      const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
      const body = this.formData(profileData);

      return this.http
        .put<UpdateProfileInterface>(`${API_URL}/Users/saveProfile/`, body, { headers })
        .map(result => result.response.data)
        .catch(this.handleError);
  }

  public getUserById2(id: number): Observable<User2> {
    const params = new HttpParams()
      .set('user_id', String(id));

    return this.http
      .get<GetUserInterface2>(`${API_MODULE_URL}/UsersModule/user/`, { params })
      .map(result => new User2(result.response.data.user))
      .catch(this.handleError);
  }

  public getUserModuleNew(): Observable<any> {
    return this.http
      .get<GetUserModuleNewInterface>(`${API_MODULE_URL}/UsersModule/new/`)
      .map(result => result.response.data)
      .catch(this.handleError);
  }

  public saveUserModule(userData): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = this.formData(userData);

    return this.http
      .put<SaveUserModuleInterface>(`${API_MODULE_URL}/UsersModule/save/`, body, { headers })
      .map(result => result.response)
      .catch(this.handleError);
  }

  public getUserAgency(orgId: number): Observable<IdName[]> {
    return this.http
      .get<GetUserAgencyInterface>(`${API_URL}/Users/${orgId}/agency/`)
      .map(result => result.response.data.map(item => new IdName(item)))
      .catch(this.handleError);
  }

  public getNewUser(): Observable<NewUser> {
    return this.http
    .get<GetUserAgencyInterface>(`${API_URL}/Users/newuser/`)
    .map(result => new NewUser(result.response.data))
    .catch(this.handleError);
}

  // Settings
  public getSettingsProfile(): Observable<Profile> {
    return this.http
      .get<GetSettingsProfileInterface>(`${API_URL}/Settings/profile/`)
      .map(result => new Profile(result.response.data))
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
