import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './../../../services/restaurant.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant.update.component',
  templateUrl: './restaurant.update.component.html',
  styleUrls: ['./restaurant.update.component.css']
})
export class RestaurantUpdateComponent implements OnInit {

  restaurant: any;
  angForm: FormGroup;
  formtitle = 'Edit Restaurant';
  constructor(private route: ActivatedRoute, private router: Router, private service: RestaurantService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      labels: ['', Validators.required],
      rating: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      picture: ['', Validators.required],
      url: ['', Validators.required]
   });
  }

  updateRestaurant(name, location, description, labels, rating, picture, url) {
    this.route.params.subscribe(params => {
    this.service.updateRestaurant(name, location, description, labels, rating, picture, url, params['id']).subscribe(res => {
      this.router.navigate(['restaurants','index']);
    });
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurant = this.service.editRestaurant(params['id']).subscribe(res => {
        this.restaurant = res;
      });
    });
  }
}
