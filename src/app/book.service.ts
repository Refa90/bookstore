import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  result: any;
  constructor(private http: HttpClient) {}

  addBook(title, author, description, published_year, publisher) {
    const uri = 'http://localhost:4000/books/add';
    const obj = {
      title: title,
      author: author,
      description: description,
      published_year: published_year,
      publisher: publisher
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getBooks() {
    const uri = 'http://localhost:4000/books';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editBook(id) {
    const uri = 'http://localhost:4000/books/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateBook(title, author, description, published_year, publisher, id) {
    const uri = 'http://localhost:4000/books/update/' + id;

    const obj = {
      title: title,
      author: author,
      description: description,
      published_year: published_year,
      publisher: publisher
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBook(id) {
    const uri = 'http://localhost:4000/books/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
