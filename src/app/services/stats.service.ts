import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StatsService {

  result: any;
  constructor(private http: HttpClient) {}

  ngOnInit(){
  }

  getLabelStats(){
        let uri = 'http://localhost:4000/stats/label';
        return this
                .http
                .get(uri)
                .map(res => {
                  return res;
                });
  }

  getRatingStats(){
    let uri = 'http://localhost:4000/stats/rating';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  } 
}