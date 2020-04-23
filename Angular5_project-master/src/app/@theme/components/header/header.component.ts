import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

import { NbAuthJWTToken, NbAuthService, NbAuthResult } from '../auth';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: {};

  userMenu = [
    { title: 'Profile' },
    { title: 'Admin Setup' },
    { title: 'Billing History' },
    { title: 'Payments' },
    { title: 'RTB Endpoints' },
    { title: 'Knowledge Base' },
    { title: 'Support' },
    { title: 'Log out' },
  ];
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  redirectDelay: number = 0;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService,
              protected router: Router) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token && token.getValue()) {
          this.user = token.getPayload();
        }
      });
  }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe((user: any) => this.user = user);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  onMenuClick($event) {
    switch ($event.title) {
      case 'Log out':
        this.authService.logout('email').subscribe((result: NbAuthResult) => {
          this.submitted = false;
          if (result.isSuccess()) {
            this.messages = result.getMessages();
          } else {
            this.errors = result.getErrors();
          }

          const redirect = result.getRedirect();
          if (redirect) {
            setTimeout(() => {
              return this.router.navigate([redirect]);
            }, this.redirectDelay);
          }
        });
        return;
    case 'Profile':
      this.router.navigate(['/pages/profile']);
      return;
    case 'Admin Setup':
      this.router.navigate(['/pages/admin/tabs']);
      return;
    case 'Billing History':
      this.router.navigate(['/pages/billing']);
      return;
    case 'Payments':
      this.router.navigate(['/pages/admin/payments']);
      return;
    case 'RTB Endpoints':
      this.router.navigate(['/pages/rtb/tab']);
      return;
    case 'Knowledge Base':
      this.router.navigate(['/pages/knowledgebase']);
      return;
    case 'Support':
      this.router.navigate(['/pages/support']);
      return;
    default:
        // Do nothing
        console.log($event.title);
    }
  }
}
