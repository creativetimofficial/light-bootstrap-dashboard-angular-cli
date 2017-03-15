import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import initNotify = require('../../../assets/js/notify.js');

declare var $:any;
// declare var demo:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //   $.getScript('../assets/js/bootstrap-checkbox-radio-switch.js');
      $.getScript('../assets/js/dashboard.js');
    // initNotify();
    //   demo.initChartist();
    //   initDemo();
  }

}
