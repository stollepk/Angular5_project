import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor() {}

  convertArrayToObjectList(constants): any {
    return Object.keys(constants).reduce((obj, key) => {
      const item = constants[key];
      obj[key] = item.reduce((prev, next) => {
        prev[next.id] = next;
        return prev;
      }, {});
      return obj;
    }, {});
  }
}

