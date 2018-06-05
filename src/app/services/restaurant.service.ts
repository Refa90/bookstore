import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {

  result: any;
  constructor(private http: HttpClient) {}

  addRestaurant(name, location, description, labels, rating, picture) {
    const uri = 'http://localhost:4000/restaurants/add';
    const obj = {
      name: name,
      location: location,
      description: description,
      labels: labels,
      rating: rating,
      picture: picture
    };

    // this
    //   .http
    //   .post(uri, obj)
    //   .subscribe(res =>
    //       console.log('Done'));

      return this
          .http
          .post(uri, obj)
          .map(res => {
            return res;
          });
  }

  getRestaurants() {
    const uri = 'http://localhost:4000/restaurants';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editRestaurant(id) {
    const uri = 'http://localhost:4000/restaurants/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateRestaurant(name, location, description, labels, rating, picture, id) {
    const uri = 'http://localhost:4000/restaurants/update/' + id;

    const obj = {
        name: name,
        location: location,
        description: description,
        labels: labels,
        rating: rating,
        picture: picture
    };

    // this
    //   .http
    //   .post(uri, obj)
    //   .subscribe(res => console.log('Done'));

    return this
            .http
            .post(uri, obj)
            .map(res => {
              return res;
            });
  }

  deleteRestaurant(id) {
    const uri = 'http://localhost:4000/restaurants/delete/' + id;

    return this
        .http
        .get(uri)
        .map(res => {
            return res;
        });
  }
}
