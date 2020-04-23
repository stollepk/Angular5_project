export class IdName {
  id: string = '';
  name: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Permission {
  everywhere: number;
  id: number;
  interface_name: number;
  name: number;
  page: number;
  sort: number;
  type: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
