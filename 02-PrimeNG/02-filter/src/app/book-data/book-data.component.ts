import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../service/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  books: Book[];

  cols: any[];

  totalRecords: number;

  allAuthors: any[];

   constructor(private bookService: BookService) { }

  ngOnInit() {
      this.bookService.getBooks().
      then(books => this.books = books);

      this.cols = [
        { field: 'name', header: 'Name' },
        {field: 'author', header: 'Author' },
        { field: 'price', header: 'Price' }      
    ];

    this.totalRecords=this.cols.length;

    this.allAuthors = [
      { label: 'All Authors', value: null },
      { label: 'Mario Puzo', value: 'Mario Puzo' },
      { label: 'J.R.R. Tolkien', value: 'J.R.R. Tolkien' },
      { label: 'J.K. Rowling', value: 'J.K. Rowling' },
      { label: 'author1', value: 'author1' },
      { label: 'author2', value: 'author2' },
      { label: 'author3', value: 'author3' }
      
  ];
  

}

}
