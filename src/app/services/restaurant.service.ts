import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {

  result: any;
  constructor(private http: HttpClient) {}

  addRestaurant(name, location, description, labels, rating, picture, url) {
    const uri = 'http://localhost:4000/restaurants/add';
    const obj = {
      name: name,
      location: location,
      description: description,
      labels: labels,
      rating: rating,
      picture: picture,
      url: url
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

  searchRestaurants(name,location,label) : any{
    let uri = 'http://localhost:4000/restaurants/search?';
      uri+="name=";
      uri+=name;
      uri+='&';
      uri+="location=";
      uri+=location;
      uri+='&';
      uri+="label=";
      uri+=label;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  searchRestaurantsByImage(img){
    console.log(img);
    let uri='TODO';
    //TODO :: send the image via HTTP and get return value.
    return this
            .http
            .get(uri)
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
              // return res;
              return ["test"];
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

  updateRestaurant(name, location, description, labels, rating, picture, url, id) {
    const uri = 'http://localhost:4000/restaurants/update/' + id;

    const obj = {
        name: name,
        location: location,
        description: description,
        labels: labels,
        rating: rating,
        picture: picture,
        url: url
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
