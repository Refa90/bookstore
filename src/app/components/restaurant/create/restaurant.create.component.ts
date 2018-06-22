import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant.create',
  templateUrl: './restaurant.create.component.html',
  styleUrls: ['./restaurant.create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

  form_title = 'Add Restaurant';
  angForm: FormGroup;

  constructor(private restervice: RestaurantService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  myValidator(group: FormGroup) {

    var fieldValue = group.value;
    var notValidResult = { notValid: true};

    var numeric = parseInt(fieldValue);

    if(!isNaN(numeric)){
        if(fieldValue == 1 || 
          fieldValue == 2 || 
          fieldValue == 3 || 
          fieldValue == 4 || 
          fieldValue == 5){
            notValidResult = null;
          }
    }
    
    return notValidResult;
  }
  
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: [''],
      labels: ['', Validators.required],
      rating: [5, Validators.required],
      picture: [''],
      url: ['', Validators.required]
    });
  }

  addRestaurant(name, location, description, labels, rating, picture, url) {
    this.restervice.addRestaurant(name, location, description, labels, rating, picture, url).subscribe(res => {
      this.router.navigate(['/restaurants/index']);
    });
  }
  ngOnInit() {
  }

}
