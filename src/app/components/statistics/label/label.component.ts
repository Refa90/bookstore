import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'stats-country',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})

export class LabelComponent implements OnInit {

  public barChartData: any;
  public colors = ['red', 'green', 'blue']
  public  dataColumns = [1];

  constructor(private http: HttpClient, private service: StatsService) {}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.getLabelStats().subscribe(res => {
      this.generateGraph(res)
    });
  }

  generateGraph(data){
    const colors = ['red', 'green', 'blue'];
    const dataColumns = [1];
    
    let finalData = []
    let counter = 0;

    data.array.forEach(element => {
        this.barChartData.push({
          id: counter++,
          label: element.label,
          value1: element.count
        })
    });
  }
}
