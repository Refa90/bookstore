import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats.service';
import { HttpClient } from '@angular/common/http';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';

@Component({
  selector: 'stats-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})

export class LabelComponent implements OnInit {

  public data: any;

  title = 'D3.js with Angular 2!';
  subtitle = 'Bar Chart';

  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;

  constructor(private http: HttpClient, private service: StatsService) {}

  ngOnInit() {
     this.service.getLabelStats().subscribe(res => {
      this.data = res;
      this.initSvg();
      this.initAxis(this.data);
      this.drawAxis();
      this.drawBars(this.data);
    });
  }

  private initSvg() {
    this.svg = d3.select("#svg-labelstats");
    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g")
                     .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis(data) {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(data.map((d) => d.labels));
    console.log("max: " + d3Array.max(data, (d) => d["total"]));
    this.y.domain([0, d3Array.max(data, (d) => d["total"])]);
  }

  private drawAxis() {
    this.g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + this.height + ")")
          .call(d3Axis.axisBottom(this.x));
    this.g.append("g")
          .attr("class", "axis axis--y")
          .call(d3Axis.axisLeft(this.y))
          .append("text")
          .attr("class", "axis-title")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("Total");
  }

  private drawBars(data) {
    this.g.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", (d) => this.x(d.labels) )
          .attr("y", (d) => this.y(d.total) )
          .attr("width", this.x.bandwidth())
          .attr("height", (d) => this.height - this.y(d.total) );
  }
}
