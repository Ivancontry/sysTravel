import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import {MatDialog} from "@angular/material/dialog";
import {BookDetailsComponent} from "../book-details/book-details.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: Book[] = [];
  public displayedColumns: string[] = ['isbn', 'title', 'pagesNumber', 'actions'];

  constructor(private _bookService: BookService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this._bookService.getBooks().subscribe(result => {
      this.books = result || [];
    })
  }

  openBookDetailsDialog(element: Book) {
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      data: element,
      width: '40%',
    });
  }
}
