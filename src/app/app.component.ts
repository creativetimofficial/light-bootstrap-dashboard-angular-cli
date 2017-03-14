import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit(){
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
    }
 isMaps(){
        if('/maps' == window.location.pathname){
            return false;
        }
        else {
            return true;
        }
    }
}
