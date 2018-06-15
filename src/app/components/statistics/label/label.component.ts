import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../services/stats.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'stats-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})

export class LabelComponent implements OnInit {

  public barChartData: any;
  public colors = ['red', 'green', 'blue']
  public  dataColumns = [1];

  constructor(private http: HttpClient, private service: StatsService) {}

  ngOnInit() {
    console.log("start label get data")
    this.getData();
    console.log("done label get data")
  }

  getData(){
    console.log("start component to service get data")
    this.service.getLabelStats().subscribe(res => {
      console.log("got service results")
      this.generateGraph(res)
    });
    console.log("done component to service get data")
  }

  generateGraph(data){
    console.log("start generate data")
    const colors = ['red', 'green', 'blue'];
    const dataColumns = [1];
    
    let finalData = []
    let counter = 0;

    console.log(data);

    data.array.forEach(element => {
        this.barChartData.push({
          id: counter++,
          label: element.label,
          value1: element.count
        })
    });
  }
}
