import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { SharedDataService } from '../../services/sharedData.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';
  restaurants: any;
  selectedImageFile: any;
  constructor(private fb: FormBuilder,private service: RestaurantService, private sharedData: SharedDataService, private recipyService: RecipeService) { 
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'location' : [null, Validators.required],
      'label' : [null, Validators.required]
      // 'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      // 'validate' : ''
    });
  }

  ngOnInit() {
    this.service.getRestaurants().subscribe(res => {
      this.sharedData.changeRestaurantResults(res);
    });
  }
  searchReastaurnat(searchModel){
    console.log(searchModel);
    this.service.searchRestaurants(searchModel.name,searchModel.location,searchModel.label).subscribe(res => {
      console.log(res);
      this.sharedData.changeRestaurantResults(res);
      // this.sharedData.changeRestaurantResults(['test']);
      
    });
    this.recipyService.searchRecipe(searchModel.name).subscribe(res => {
      console.log(res);
      debugger;
      this.sharedData.changeRecipyResults(res);
      // this.sharedData.changeRestaurantResults(['test']);
      
    });
  }


  onFileSelected(event){
    this.selectedImageFile=<File>event.target.files[0];
    debugger;
}
onUpload(){
  console.log('upload image clicked');
  this.service.searchRestaurantsByImage(this.selectedImageFile).subscribe(res => {
    console.log(res);
    this.selectedImageFile = res;
  });
}
}
