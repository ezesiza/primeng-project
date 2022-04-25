import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<any>('http://localhost:3000/books');
  }
  getHistoryBooks() {
    return this.http.get<any>('http://localhost:3000/history');
  }

  getBookById(id: any) {
    return this.http.get<any>(`http://localhost:3000/books?id'=${id}`)
  }

  getBookByAuthor(query: any) {
    return this.http.get<any>(`http://localhost:3000/books?authors=${query}`)
  }

  createBook(isbn: string, title: string, authors: string) {
    const registerData: Book = {
      isbn,
      title,
      authors,
    };

    return this.http.post<Book>('http://localhost:3000/books', registerData)
  }

  saveToHistory(book: Book) {
    return this.http.post<Book>('http://localhost:3000/history', book)
  }

  deleteBook(id: number) {
    return this.http.delete<{ data: Book }>('http://localhost:3000/books/' + id)
  }
}
