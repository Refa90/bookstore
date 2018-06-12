import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestaurantService } from '../app/services/restaurant.service';
//import { RestaurantService } from '../app/services/restaurant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'app works !!!';

  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';
  restaurants: any;
  selectedImageFile: any;
  constructor(private fb: FormBuilder,private service: RestaurantService) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'location' : [null, Validators.required],
      'label' : [null, Validators.required]
      // 'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      // 'validate' : ''
    });


  }

  ngOnInit() {
    // this.rForm.get('validate').valueChanges.subscribe(

    //   (validate) => {

    //       if (validate == '1') {
    //           this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    //           this.titleAlert = 'You need to specify at least 3 characters';
    //       } else {
    //           this.rForm.get('name').setValidators(Validators.required);
    //       }
    //       this.rForm.get('name').updateValueAndValidity();

    //   });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
}

//   searchReastaurnat(searchModel){
//     console.log(searchModel);
//     this.service.searchRestaurants(searchModel.name,searchModel.location,searchModel.label).subscribe(res => {
//       console.log(res);
//       this.restaurants = res;
//     });
//   }


//   onFileSelected(event){
//     this.selectedImageFile=<File>event.target.files[0];
//     debugger;
// }
// onUpload(){
//   console.log('upload image clicked');
//   this.service.searchRestaurantsByImage(this.selectedImageFile).subscribe(res => {
//     console.log(res);
//     this.selectedImageFile = res;
//   });
// }
}
