import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { RestaurantService } from '../services/restaurant.service';

import 'rxjs/add/operator/map';

@Injectable()
export class SharedDataService {
  private resList: any[] = [];
  private restaurantResults = new BehaviorSubject(this.resList);
  currentRestaurantResults = this.restaurantResults.asObservable();

  changeRestaurantResults(results: any[]) {
    this.restaurantResults.next(results)
  } 
  
  private recList: any[] = [];
  private recipyResults = new BehaviorSubject(this.recList);
  currentRecipyResults = this.recipyResults.asObservable();

  changeRecipyResults(results: any[]) {
    this.recipyResults.next(results)
  } 

  constructor(private service: RestaurantService) {
    // this.service.getRestaurants(10).subscribe(res => {
    //   this.changeRestaurantResults(res);
    // });
   }

  
}
