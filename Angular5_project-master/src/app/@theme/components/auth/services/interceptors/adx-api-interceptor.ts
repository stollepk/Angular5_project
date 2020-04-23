import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { NbAuthService } from '../auth.service';
import { AdxApiAuthToken } from '../token.service';
import { NB_AUTH_INTERCEPTOR_HEADER } from '../../auth.options';

@Injectable()
export class AdxApiInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              @Inject(NB_AUTH_INTERCEPTOR_HEADER) protected headerName: string = 'Authorization') {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getToken()
      .switchMap((token: AdxApiAuthToken) => {
        // console.log(token);
        if (token && token.getValue()) {
          req = req.clone({
            setHeaders: {
              [this.headerName]: `Bearer${token.getValue()}`,
            },
          });
        }
        return next.handle(req).do((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // redirect to the login route
              // or show a modal
            }
          }
        });
      });
  }

  protected get authService(): NbAuthService {
    return this.injector.get(NbAuthService);
  }
}
