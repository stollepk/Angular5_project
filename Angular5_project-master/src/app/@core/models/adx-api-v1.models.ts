import { IdName, Permission } from './base';

export class Constants {
  add_audio: IdName[];
  bid_type: IdName[];
  budget_pacing_budget_intervals: IdName[];
  budget_pacing_types: IdName[];
  call_to_actions: IdName[];
  channels: IdName[];
  creative_attributes: IdName[];
  creative_events: IdName[];
  creative_statuses: IdName[];
  creative_types: IdName[];
  data_storages: IdName[];
  day_part_timezones: IdName[];
  days: IdName[];
  frequency_cap_pacing_periods: IdName[];
  frequency_cap_pacing_types: IdName[];
  frequency_cap_periods: IdName[];
  frequency_cap_source_definition: IdName[];
  frequency_cap_types: IdName[];
  iab_categories: IdName[];
  inventory_types: IdName[];
  permissions: Permission[];
  pixel_events_repeats: IdName[];
  pixel_type: IdName[];
  post_window_intervals: IdName[];
  relation_types: IdName[];
  repeat_merit_event_periods: IdName[];
  rtb_supply_types: IdName[];
  secure_type_lists: IdName[];
  site_list_relation_types: IdName[];
  sizes: IdName[];
  statuses: IdName[];
  supply_types: IdName[];
  target_any_or_all_of_segments: IdName[];
  test_mode: IdName[];
  time: IdName[];
  time_zones: IdName[];
  vast_types: IdName[];
  video_api_framework_types: IdName[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

interface Approval {
  vendor: string;
  approved: boolean;
  note: string;
}

export class Naitve {

  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  iab_attr: number[] = [0];
  image_attachment: string = '';
  image_attachment_logo: string = '';
  call_to_action: number = 0;
  headline: string = '';
  description: string = '';
  brand_name: string = '';
  adomain: string = '';
  destination_url: string = '';
  macros_custom_data: string = '';
  username: string = '';
  approvals: Approval[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Display {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  iab_attr: number[] = [0];
  adomain: string = '';
  size: number = 0;
  audio: number = 0;
  html: string = '';
  secure_type: number = 0;
  image_attachment: string = '';
  destination_url: string = '';
  call_to_action: number = 0;
  image_attachment_logo: string = '';
  headline: string = '';
  description: string = '';
  brand_name: string = '';
  video_attachment: string = '';
  video_api_framework: number = 0;
  vast_type: number = 0;
  is_1pas: number = 0;
  video_clickthrough: string = '';
  macros_custom_data: string = '';
  username: string = '';
  approvals: Approval[] = [{
    vendor: '',
    approved: true,
    note: '',
  }];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Video {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  iab_attr: number[] = [0];
  adomain: string = '';
  size: number = 0;
  audio: number = 0;
  html: string = '';
  secure_type: number = 0;
  image_attachment: string = '';
  destination_url: string = '';
  call_to_action: number = 0;
  image_attachment_logo: string = '';
  headline: string = '';
  description: string = '';
  brand_name: string = '';
  video_attachment: string = '';
  video_api_framework: number = 0;
  vast_type: number = 0;
  is_1pas: number = 0;
  video_clickthrough: string = '';
  macros_custom_data: string = '';
  username: string = '';
  approvals: Approval[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class IpList {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  relation_type: number = 0;
  size: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Organization {
  id: number = 0;
  name: string = '';
  active: number = 0;
  min_allowed_balance: number = 0;
  margin: number = 0;
  owner_exchange_commission: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Organization2 {
  active: number = 0;
  agency_user_id: string = '';
  balance: number = 0;
  email: string = '';
  id: number = 0;
  min_allowed_balance: number = 0;
  name: string = '';
  subdomain_id: number = 0;
  username: string = '';
  utype: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Report {
  id: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class SiteList {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  relation_type: number = 0;
  size: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Strategy {
  id: number = 0;
  name: string = '';
  active: number = 0;
  channel: number = 0;
  use_campaign_start_date: number = 0;
  use_campaign_end_date: number = 0;
  start_date_interface: string = '';
  start_time_interface: string = '';
  end_date_interface: string = '';
  end_time_interface: string = '';
  is_unlimited_budget: number = 0;
  total_budget: number = 0;
  max_bid: number = 0;
  budget_pacing_type: number = 0;
  local_budget: number = 0;
  budget_period: number = 0;
  frequency_cap_per_user_impressions: number = 0;
  frequency_cap_pacing_type: number = 0;
  frequency_cap_time_units_count: number = 0;
  frequency_cap_per_user_impressions_period: number = 0;
  frequency_cap_per_source: number = 0;
  frequency_cap_per_source_period: number = 0;
  source_definition: number = 0;
  impressions_cap_is_unlimited: number = 0;
  impressions_cap: number = 0;
  rtb_supply_type_open_or_private: number = 0;
  inventory_types: string = '';
  any_ssp_is_allowed: number = 0;
  any_rtb_deal_is_allowed: number = 0;
  is_all_days_part: number = 0;
  macros_custom_data: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class UserAgentList {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  relation_type: number = 0;
  size: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
