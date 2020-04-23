import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adx-admin-tab',
  styleUrls: ['./admin-tab.component.scss'],
  templateUrl: './admin-tab.component.html',
})
export class AdminTabComponent implements OnInit {
  tabs: any[] = [
    {
      title: 'Advertisers',
      route: '/pages/admin/tabs/advertisers',
    },
    {
      title: 'Users',
      route: '/pages/admin/tabs/users',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['tab']) {}
    });
  }

  onChangeTab($event) {
    // console.log($event);
  }
}
