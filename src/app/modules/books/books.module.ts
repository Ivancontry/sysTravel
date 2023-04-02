import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './components/books/books.component';
import { BookRoutingModule } from './books.routing.module';
import {MatTableModule} from "@angular/material/table";
import {BookService} from "./services/book.service";
import {MatButtonModule} from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [BookService]
})

export class BooksModule { }
