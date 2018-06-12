import { Component, OnInit } from '@angular/core';
//import * as burgers from './../../../../../scripts/burgers';


@Component({
  selector: 'app-home',
  templateUrl: './home.index.component.html',
  styleUrls: ['./home.index.component.css']
})

export class HomeIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init home index component');
    //burgers.init(); 
    console.log('done init home index component');
  }
}


