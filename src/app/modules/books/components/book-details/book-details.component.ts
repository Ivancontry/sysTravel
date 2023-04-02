import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Book} from "../../models/book";
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public book: Book = new Book();
  private readonly bookIsbn: number;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _bookService: BookService) {
    this.bookIsbn = data.isbn;
    this.getBookDetailsByIsbn();
  }

  ngOnInit(): void {
  }

  private getBookDetailsByIsbn() {
    this._bookService.getBookByIsbn(this.bookIsbn).subscribe(result => {
      this.book = result || new Book();
    })
  }

  onClose() {

  }
}
