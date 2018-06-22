import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ReverseGeocodingService } from './reverseGeocoding.service';

@Injectable()
export class RestaurantService {
  private geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyArrljopB_CNWD0-PinQTFvnJrWKsl7J9o&address=';  
  
  result: any;
  constructor(private http: HttpClient, private service : ReverseGeocodingService ) {}

  addRestaurant(name, location, description, labels, rating, picture, url) {
    const uri = 'http://localhost:4000/restaurants/add';
    const obj = {
      name: name,
      location: location,
      description: description,
      labels: labels,
      rating: rating,
      picture: picture,
      url: url,
      lat: null,
      lon: null
    };

    // this
    //   .http
    //   .post(uri, obj)
    //   .subscribe(res =>
    //       console.log('Done'));

    return this.http.get(this.geocodeUrl + location)
    .map((res: any) =>  { 
      return res })
    .flatMap((geores: any) => {
      debugger;
      if (geores && geores.status == "OK") {
        obj.lat = geores.results["0"].geometry.location.lat
        obj.lon = geores.results["0"].geometry.location.lng
      }
      return this.http.post(uri, obj)
        .map((res: any) => {
          return res;
        });
    });

      // var geocode = this.service.getGeocode(location).map(res: any => res);
      // debugger;
      // return this
      //     .http
      //     .post(uri, obj)
      //     .map(res => {
      //       return res;
      //     });
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
    
    let uri = 'http://localhost:4000/restaurants/searchImage?name=';
    uri+=img;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });

    // let uri = 'http://127.0.0.1:5000/bar?url=';
    // uri+=img;
    // console.log("the final url is: "+uri)
    // return this
    //         .http
    //         .get(uri)
    //         .map(res => {
    //           return res;
    //         });


    // console.log("this is the unput to the api: "+ img);
    // let uri='TODO';
    // //TODO :: send the image via HTTP and get return value.
    // return this
    //         .http
    //         .get(uri)
    //         .map(res => {
    //           return res;
    //         });
  }

  getRestaurants() : any {
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

  updateRestaurant(name, location, description, labels, rating, picture, url, id) {
    const uri = 'http://localhost:4000/restaurants/update/' + id;

    const obj = {
        name: name,
        location: location,
        description: description,
        labels: labels,
        rating: rating,
        picture: picture,
        url: url,
        lat: null,
        lon: null
    };

    // this
    //   .http
    //   .post(uri, obj)
    //   .subscribe(res => console.log('Done'));
    return this.http.get(this.geocodeUrl + location)
    .map((res: any) =>  { 
      return res })
    .flatMap((geores: any) => {
      debugger;
      if (geores && geores.status == "OK") {
        obj.lat = geores.results["0"].geometry.location.lat
        obj.lon = geores.results["0"].geometry.location.lng
      }
      return this.http.post(uri, obj)
        .map((res: any) => {
          return res;
        });
    });
    // return this
    //         .http
    //         .post(uri, obj)
    //         .map(res => {
    //           return res;
    //         });
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
