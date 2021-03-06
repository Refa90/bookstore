import { BookService } from './../../../book.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Coin } from '../../Coin';

@Component({
  selector: 'app-index',
  templateUrl: './book.index.component.html',
  styleUrls: ['./book.index.component.css']
})
export class BookIndexComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient, private service: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.service.getBooks().subscribe(res => {
      this.books = res;
    });
  }

  deleteBook(id) {
    this.service.deleteBook(id).subscribe(res => {
      console.log('Deleted');
    });
    this.getBooks();
  }
}
