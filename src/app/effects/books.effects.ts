import { RemoveBook, RemoveBookFailed, RemoveBookSuccess, CreateBooks, CreateBookSuccess, CreateBookFailed, GetBookByAuthor, BookByAuthorSuccess, GetBookById, GetBookByIdSuccess, AddBookToHistory, CreateHistorySuccess, HistoryLoadedSuccess, BooksByAuthorFailed } from './../actions/books.actions';
import { BooksActionTypes, BooksLoadedSuccess, BooksLoadFailed } from '../actions/books.actions';
import { BookService } from 'src/app/_services/book.service';
import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of} from 'rxjs';
import {catchError,map, mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';


@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private bookService: BookService) {}

  loadBooks$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.GetAllBooks),
      mergeMap(() => {
        return this.bookService.getAllBooks().pipe(
          map(books => {
            return new BooksLoadedSuccess(books)
          }),
          catchError((err) => of(new BooksLoadFailed(err)))
        )
      })
    )
  })

  loadHistory$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.GetAllHistory),
      mergeMap(() => {
        return this.bookService.getHistoryBooks().pipe(
          map(books => {
            return new HistoryLoadedSuccess(books)
          }),
          catchError((err) => of(new BooksLoadFailed(err)))
        )
      })
    )
  })

  createBook$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.CreateBook),
      map((action: CreateBooks) => action.book),
      mergeMap((book: Book) => {
        return this.bookService.createBook(book.isbn, book.title, book.authors).pipe(
          map(newBook => new CreateBookSuccess(newBook)),
          catchError(err => of(new CreateBookFailed(err)))
        )
      })
    )
  });

  saveToHistory$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.AddBookToHistory),
      map((action: AddBookToHistory) => action.book),
      mergeMap((book: any) => {
        return this.bookService.saveToHistory(book).pipe(
          map(newBook => new CreateHistorySuccess(newBook)),
          catchError(err => of(new CreateBookFailed(err)))
        )
      })
    )
  });

  getBookByAuthor$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.GetBookByAuthor),
      map((action: GetBookByAuthor) => action.query),
      mergeMap((query: string) => {
        return this.bookService.getBookByAuthor(query).pipe(
          map((book) => (new BookByAuthorSuccess(book))),
          catchError(err => of(new BooksByAuthorFailed(err)))
        )
      })
    )
  })
  getBookById$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.GetBookById),
      map((action: GetBookById) => action.id),
      mergeMap((id: number) => {
        return this.bookService.getBookById(id).pipe(
          map((book) => (new GetBookByIdSuccess(book))),
          catchError(err => of(new BooksLoadFailed(err)))
        )
      })
    )
  })


  deleteBook$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActionTypes.RemoveBook),
      map((action: RemoveBook) => action.id),
      mergeMap((bookId: number) => {
        return this.bookService.deleteBook(bookId).pipe(
          map(() => (new RemoveBookSuccess(bookId))),
          catchError(err => of(new RemoveBookFailed(err)))
        )
      })
    );
  })

}
