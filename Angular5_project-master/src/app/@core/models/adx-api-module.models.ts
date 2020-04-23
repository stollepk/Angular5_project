export class Payment {
  balance: number = 0;
  id: number = 0;
  min_allowed_balance: number = 0;
  username: string = '';
  utype: number = 0;
  type: string = '';
  credit: number = 0;
  amount: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class RtbEndpoint2 {
  id: number = 0;
  name: string = '';
  TestRTB: string = '';
  display_name: string = '';
  status: number = 1;
  associated_user_id: number = 0;
  url: string = '';
  created: string = '';
  updated: string = '';
  type: number = 0;
  forensiq_enabled: number = 0;
  forensiq_requests_limit: number = 0;
  supply_type: number = 0;
  supply_types: number = 0;
  parent_ssp_id: number = 0;
  test_mode: number = 0;
  ct_unencoded: string = '';
  ct_encoded: string = '';
  ct_dbl_encoded: string = '';
  disabled_fields: string = '';
  display_simple_name: string = '';
  users_sync_default_expiration_days: number = 0;
  subdomain_id: number = 0;
  dsp_users_sync_url: string = '';
  redirect_sync_to: string = '';
  init_sync_from: string = '';
  adomains_black_list: Array<string> = [];
  available_for_simple: number = 0;
  allow_empty_domains: number = 0;
  export_is_forbidden: number = 0;
  responses_with_cors: number = 0;
  nurl_in_adm: number = 0;
  required_vendors: string = '';
  max_response_time: number = 0;
  max_qps: number = 0;
  exchange: number = 0;
  rtb_pop: number = 0;

  phase: string = '';
  suuplyType: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class User {
  active: string = '0';
  agency_user_id: string = '';
  api_key: string = '';
  balance: number = 0;
  created_at: number = 0;
  css: string = '';
  css_value: string = '';
  csv_separator: string = '0';
  dsp_number_of_advertisers: number = 0;
  dsp_number_of_campaigns: number = 0;
  dsp_spent: number = 0;
  email: string = '';
  external_js: string = '';
  favicon: string = '';
  footer: string = '';
  ga_key: string = '';
  government_id: string = '';
  id: string = '';
  intercom_app_id: string = '';
  internal_js: string = '';
  is_admin: boolean = false;
  is_advertiser: boolean = false;
  is_change: boolean = false;
  item_per_page: number = 0;
  last_login: number = 0;
  max_utype: string = '';
  name: string = '';
  password: number = 0;
  permission: Object = {};
  platform: string = '';
  publisher_feed: boolean = false;
  reach_network_id: string = '';
  server_seconds: number = 0;
  server_time: string = '';
  show_knowledge: boolean = false;
  site_version: string = '';
  subdomain: string = '';
  subdomain_id: string = '';
  time: string = '';
  title: string = '';
  uri_knowledge: string = '';
  username: string = '';
  utype: string = '';
  where_find: string = '';
  where_find_other: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class User2 {
  active: string = '';
  address: string = '';
  agency_user_id: number = 0;
  city: string = '';
  commission: string = '';
  email: string = '';
  id: string = '';
  margin: number = 0;
  margin_managed_ssps: number = 0;
  margin_unmanaged_ssps: number = 0;
  min_allowed_balance: string = '';
  moderation_creatives: string = '';
  moderation_tmt: string = '';
  name: string = '';
  owner_exchange_commission: string = '';
  owner_house_commission: string = '';
  phone: string = '';
  skype: string = '';
  subdomain_id: string = '';
  username: string = '';
  utype: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Permission2 {
  active: string = '';
  created: string = '';
  email: string = '';
  id: string = '';
  last_login: string = '';
  name: string = '';
  username: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
