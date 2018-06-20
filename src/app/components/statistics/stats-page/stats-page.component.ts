import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-page',
  template: `
  <div class="grid_12">
  <div class="hor_separator"></div>
</div>
<div class="grid_12">
  <stats-label></stats-label>
</div>
<div class="grid_12">
  <div class="hor_separator"></div>
</div> 
<div class="grid_12">
  <stats-rating></stats-rating>
</div>
  `,
  styles: []
})
export class StatsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
