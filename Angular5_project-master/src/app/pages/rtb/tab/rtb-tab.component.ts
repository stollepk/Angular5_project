import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adx-rtb-tab',
  styleUrls: ['./rtb-tab.component.scss'],
  templateUrl: './rtb-tab.component.html',
})
export class RtbTabComponent implements OnInit {
  nextTab: number = 0;

  // constructor(private route: ActivatedRoute) {}
  constructor() {}

  ngOnInit() {
  }

  onChangeTab($event) {
    console.log($event);
  }
}
