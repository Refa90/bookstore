import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form_title = 'Add Book';
  angForm: FormGroup;
  constructor(private bookservice: BookService, private fb: FormBuilder, private router: Router) {
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
  addBook(title, author, description, published_year, publisher) {
    this.bookservice.addBook(title, author, description, published_year, publisher);
    this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
