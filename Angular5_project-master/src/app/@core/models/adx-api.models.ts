import { IdName } from './index';

export class Advertiser {
  id: number = 0;
  name: string = '';
  status: number = 0;
  currentBalance: number = 0;
  credit: number = 0;
  margin: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Agency {
  id: number = 0;
  name: string = '';
  active: number = 0;
  min_allowed_balance: number = 0;
  margin: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class BillingHistory {
  id: number = 0;
  date: Date = new Date();
  credit: number = 0;
  debit: number = 0;
  balance: number = 0;
  user: string = '';
  organizatioin: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Campaign {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  iab_category: string[] = [];
  time_zone: number = 0;
  active: number = 0;
  is_unlimited_budget: number = 1;
  daily_budget_is_unlimited: number = 1;
  daily_budget: number = 0;
  frequency_cap: number = 0;
  frequency_cap_type: number = 1;
  frequency_cap_period: number = 0;
  macros_custom_data: string = '';
  attribution_enabled: number = 1;
  conversion_pixel_id: number = 0;
  pixel_events_repeat: number = 0;
  pixel_events_repeat_time: number = 0;
  pixel_events_repeat_period: number = 0;
  post_click_window_enabled: number = 1;
  post_click_window_period: number = 0;
  post_click_window: number = 0;
  post_view_window_enabled: number = 1;
  post_view_window_period: number = 5;
  post_view_window: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class NewUser {
  active_type: IdName[];
  organizations: {
    id: number;
    username: string;
    utype: number;
    subdomain_id: number;
    agency_user_id: number;
  }[];
  objects: {
    id: number;
    username: string;
    name: string;
    email: string;
    active: number;
    subdomain_id: number;
    agency_user_id: number;
    utype: number;
    balance: number;
    min_allowed_balance: number;
  }[];
  permissions: {
    id: number;
    name: string;
    interface_name: string;
    page: number;
    sort: number;
    type: number;
    everywhere: number;
    default_value: string;
  }[];
  permission_methods: IdName[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Profile {
  Notification: {
    shortage: string;
  } = { shortage: '' };
  Subdomain: {
    api_domain: string;
    css: string;
    external_js: string;
    internal_js: string;
    logo: string;
  };
  User: {
    default_self_serve_commission: number;
    default_self_serve_margin: number;
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
