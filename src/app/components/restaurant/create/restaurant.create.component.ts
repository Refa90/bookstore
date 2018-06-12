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
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      labels: ['', Validators.required],
      rating: ['', Validators.required,/* Validators.pattern('/[0-9\+\-\ ]/')*/],
      picture: ['', Validators.required]
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
