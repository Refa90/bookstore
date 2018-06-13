import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/sharedData.service';

@Component({
  selector: 'app-restaurant-results',
  templateUrl: './restaurant-results.component.html',
  styles: []
})
export class RestaurantResultsComponent implements OnInit {
  restaurants:any[] = [];

  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    this.sharedData.currentRestaurantResults.subscribe(res => this.restaurants = res);
  }

}
