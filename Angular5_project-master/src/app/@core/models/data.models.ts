import { User } from './adx-api-module.models';

export class ProfileData extends User {
  notifications: {
    shortrage_report: number;
  } = {
    shortrage_report: 0,
  };

  constructor(values: Object = {}) {
    super({});
    Object.assign(this, values);
  }
}
