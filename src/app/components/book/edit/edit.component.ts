import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../../../book.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: any;
  angForm: FormGroup;
  formtitle = 'Edit Book';
  constructor(private route: ActivatedRoute, private router: Router, private service: BookService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      published_year: ['', Validators.required],
      publisher: ['', Validators.required]
   });
  }

  updateBook(title, author, description, published_year, publisher) {
    this.route.params.subscribe(params => {
    this.service.updateBook(title, author, description, published_year, publisher, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.service.editBook(params['id']).subscribe(res => {
        this.book = res;
      });
    });
  }
}
