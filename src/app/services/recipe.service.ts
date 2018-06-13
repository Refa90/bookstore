import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    result: any;
    constructor(private http: HttpClient) {}

    searchRecipe(label) : any{
        let uri = 'http://localhost:4000/recipe/search?label='+label;
        return this
                .http
                .get(uri)
                .map(res => {
                  return res;
                });
      }
}