/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdxApiAuthProvider, NbAuthModule } from './@theme/components/auth';
import { NB_AUTH_TOKEN_WRAPPER_TOKEN, AdxApiAuthToken } from './@theme/components/auth';
import { AuthGuard, AdxApiInterceptor } from './@theme/components/auth/services';

import { environment } from '../environments/environment';

const authOptions = {
  providers: {
    email: {
      service: AdxApiAuthProvider,
      config: {
        baseEndpoint: environment.apiV1Url,
        login: {
          endpoint: '/auth',
          method: 'post',
        },
        logout: {
          endpoint: '/auth',
          method: 'delete',
          redirect: {
            success: '/auth/login',
            failure: null,
          },
        },
      },
    },
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot(authOptions),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: AdxApiAuthToken },
    { provide: HTTP_INTERCEPTORS, useClass: AdxApiInterceptor, multi: true },
    AuthGuard,
  ],
})
export class AppModule {
}
