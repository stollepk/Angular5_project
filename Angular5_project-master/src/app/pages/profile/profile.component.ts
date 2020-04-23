import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { UserService } from '../../@core/data/users.service';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'adx-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile = {};
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  notifications_shortage = 0;
  config: ToasterConfig;

  constructor(private service: UserService, private location: Location, private toaster: ToasterService) {}

  ngOnInit() {
    this.service.getProfile().subscribe(profile => {
      this.profile = profile ;
    });
  }

  saveClicked(event) {
    // todo: check password
    if (this.oldPassword && this.newPassword) {
      if (this.newPassword !== this.confirmPassword) {
        this.showToast('error', 'Error', 'Password mismatch');
        return;
      }
    }

    const profileData = this.oldPassword !== '' ?
      {
        'User_Me[old_password]': this.oldPassword,
        'User_Me[password]': this.newPassword,
        'Notifications[shortage]': this.notifications_shortage,
      } :
      {
        'Notifications[shortage]': this.notifications_shortage,
      };

    this.service.updateProfile(profileData).subscribe(result => {
      if (result.success) {
        this.showToast('info', 'Success', 'Profile data saved successfully');
      } else {
        this.showToast('error', 'Error', result.message);
      }
    });
  }

  cancelClicked(event) {
    this.location.back();
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toaster.popAsync(toast);
  }
}
