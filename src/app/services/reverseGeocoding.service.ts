import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReverseGeocodingService {

  // $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 
  //             address + '&key=X')
  //     .then(function(coord_results){
  //        $scope.queryResults = coord_results.data.results;
  //        $scope.geodata = $scope.queryResults[0].geometry;
  //      }, 
  //      function error(_error){
  //         $scope.queryError = _error;
  //     });
  private url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyArrljopB_CNWD0-PinQTFvnJrWKsl7J9o&address=';  
  
  constructor(private http: HttpClient){

  }
  
  // getGeocode(address){
  //   let uri = this.url + address;
  //       return this
  //               .http
  //               .get(uri, null)
  //               .map((res : string) => {
  //                 return res;
  //               });
  // }
  
}