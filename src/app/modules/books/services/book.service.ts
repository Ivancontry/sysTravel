import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly  books: Book[] = [
    {
      isbn: 9780321125217,
      editorialId: 1,
      editorialName: 'Addison-Wesley',
      title: 'Refactoring: Improving the Design of Existing Code',
      synopsis: 'As the application of object technology--particularly the Java programming language--has become commonplace, a new problem has emerged to confront the software development community.',
      pagesNumber: '464',
      editorial: {
        name: 'Addison-Wesley',
        campus: 'Boston'
      },
      authors: [
        {
          name: 'Martin',
          lastName: 'Fowler'
        },
        {
          name: 'Kent',
          lastName: 'Beck'
        }
      ]
    },
    {
      isbn: 9780201835953,
      editorialId: 2,
      editorialName: 'Addison-Wesley',
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      synopsis: 'This book isn\'t an introduction to object-oriented technology or design. Many books already do a good job of that.',
      pagesNumber: '395',
      editorial: {
        name: 'Addison-Wesley',
        campus: 'Boston'
      },
      authors: [
        {
          name: 'Erich',
          lastName: 'Gamma'
        },
        {
          name: 'Richard',
          lastName: 'Helm'
        },
        {
          name: 'Ralph',
          lastName: 'Johnson'
        },
        {
          name: 'John',
          lastName: 'Vlissides'
        }
      ]
    },
    {
      isbn: 9780132350884,
      editorialId: 3,
      editorialName: 'Prentice Hall',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      synopsis: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. ',
      pagesNumber: '464',
      editorial: {
        name: 'Prentice Hall',
        campus: 'Upper Saddle River, NJ'
      },
      authors: [
        {
          name: 'Robert',
          lastName: 'C. Martin'
        }
      ]
    }
  ];
  constructor(private _httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return of((this.books));
    // return this._httpClient.get<Book[]>(`${environment.apiEndpoint}/api/books`);
  }

  getBookByIsbn(bookIsbn: number): Observable<Book | undefined> {
    return of(this.books.find(book => book.isbn === bookIsbn));
    // return this._httpClient.get<Book>(`${environment.apiEndpoint}/api/books/${bookIsbn}`);
  }
}
