import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';


export enum BooksActionTypes {
  CreateBook = '[Books] Create Book',
  CreateBookSuccess = '[Books] Create Book Success',
  CreateBookFailed = '[Books] Create Book Failed',

  AddBookToHistory = '[Books] Add Book To History',
  HistoryLoadedSuccess = '[HistoryLoadedSuccess] History Loaded Success',
  CreateHistorySuccess = "CreateHistorySuccess",
  GetAllHistory = '[Books] Get All History',

  BookByAuthorSuccess = '[Books] Book By Author Success',
  RemoveBook = '[Books] Remove Book',
  RemoveBookSuccess = '[Books] Remove Book Success',
  RemoveBookFailed = '[Books] Remove Book Failed',

  GetBookById = '[Books] Get One Book By Id',
  GetBookByIdSuccess = '[Books] Get One Book By Id Success',
  GetBookByAuthor = '[Books] Get Book By Author',
  GetAllBooks = '[Books] Get All Books',

  BooksLoadedSuccess = '[BooksLoadedSuccess] Books Loaded Success',
  BooksLoadFailed = '[Books] Books Load Failed',
  BooksByAuthorFailed = '[Books] Books By Author  Failed',
}


export class BooksLoadedSuccess implements Action {
  readonly type = BooksActionTypes.BooksLoadedSuccess;
  constructor(public books: Book[]){}
}
export class HistoryLoadedSuccess implements Action {
  readonly type = BooksActionTypes.HistoryLoadedSuccess;
  constructor(public history: Book[]){}
}

export class AddBookToHistory implements Action {
  readonly type = BooksActionTypes.AddBookToHistory;
  constructor(public book: Book){}
}

export class BooksLoadFailed implements Action {
  readonly type = BooksActionTypes.BooksLoadFailed;
  constructor(public error: any){}
}
export class BooksByAuthorFailed implements Action {
  readonly type = BooksActionTypes.BooksByAuthorFailed;
  constructor(public error: any){}
}

export class CreateBooks implements Action {
    readonly type = BooksActionTypes.CreateBook;
    constructor(public book: Book){}
}

export class CreateBookSuccess implements Action {
    readonly type = BooksActionTypes.CreateBookSuccess;
    constructor(public book: Book){}
}
export class CreateHistorySuccess implements Action {
    readonly type = BooksActionTypes.CreateHistorySuccess;
    constructor(public book: Book){}
}
export class BookByAuthorSuccess implements Action {
    readonly type = BooksActionTypes.BookByAuthorSuccess;
    constructor(public book: Book){}
}
export class CreateBookFailed implements Action {
    readonly type = BooksActionTypes.CreateBookFailed;
    constructor(public error: string){}
}

export class RemoveBook implements Action {
    readonly type = BooksActionTypes.RemoveBook;
    constructor(public id: number){}
}
export class RemoveBookSuccess implements Action {
    readonly type = BooksActionTypes.RemoveBookSuccess;
    constructor(public id: number){}
}
export class GetBookByIdSuccess implements Action {
    readonly type = BooksActionTypes.GetBookByIdSuccess;
    constructor(public id: number){}
}
export class RemoveBookFailed implements Action {
    readonly type = BooksActionTypes.RemoveBookFailed;
    constructor(public error: string){}
}
export class GetBookById implements Action {
    readonly type = BooksActionTypes.GetBookById;
    constructor(public id: number){}
}
export class GetBookByAuthor implements Action {
    readonly type = BooksActionTypes.GetBookByAuthor;
    constructor(public query: string){}
}
export class GetAllBooks implements Action {
    readonly type = BooksActionTypes.GetAllBooks;
}
export class GetAllHistory implements Action {
    readonly type = BooksActionTypes.GetAllHistory;
}



export type BooksActions =
  CreateBooks| CreateBookSuccess | RemoveBook | RemoveBookFailed |CreateBookFailed|GetAllHistory
  | RemoveBookSuccess | GetBookById | GetAllBooks | GetBookByAuthor | CreateHistorySuccess
  | BooksLoadFailed | BooksLoadedSuccess| BookByAuthorSuccess|GetBookByIdSuccess|AddBookToHistory|HistoryLoadedSuccess;
