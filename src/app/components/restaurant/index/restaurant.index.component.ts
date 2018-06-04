import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant.index',
  templateUrl: './restaurant.index.component.html',
  styleUrls: ['./restaurant.index.component.css']
})

export class RestaurantIndexComponent implements OnInit {

  restaurants: any;

  constructor(private http: HttpClient, private service: RestaurantService) {}

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.service.getRestaurants().subscribe(res => {
      this.restaurants = res;
    });
  }

  deleteRestaurant(id) {
    this.service.deleteRestaurant(id).subscribe(res => {
      console.log('Deleted');
    });
    this.getRestaurants();
  }

}
