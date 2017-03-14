import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $.getScript('../../../../assets/js/googlemap.js');
  }

}
