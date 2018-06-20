import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { StatsService } from '../../../services/stats.service';

@Component({
  selector: 'stats-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Pie Chart';

  private data: any;
  private data2: any = [];

  constructor(private statsService : StatsService) { 
  }
 
private colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
  ngOnInit() {
    this.statsService.getRatingStats().subscribe(res => {
      console.log("rating data:" + res[0] + "," + res[1]);
      this.data = res;
      var i = 0;
      this.data.forEach(element => {

        this.data2.push({id: i, label : element.rating + ' stars', color : this.colors[i++], value : element.rating })
      });
    })
  }




}
