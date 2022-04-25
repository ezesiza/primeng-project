import {BooksActions, BooksActionTypes} from '../actions/books.actions';
import { Book } from '../models/book.model';


export interface BookState {
    books: Book[],
    history: Book[],
    book:Book,
    selectedId:number,
    currentAuthor:string,
    error:any,
    tabIndex:string
}

 export const initialState: BookState = {
    books: [],
    book: {},
    currentAuthor:'',
    history:[],
    selectedId:0,
    tabIndex:'',
    error:''
};

export function booksReducer(state = initialState, action: BooksActions): BookState {
  switch (action.type) {
    case BooksActionTypes.CreateBookSuccess:
      return { ...state, books:[...state.books, action.book] };
    case BooksActionTypes.AddBookToHistory:
      return { ...state, history: [...state.history, action.book] };
    case BooksActionTypes.RemoveBookSuccess:
      return { ...state, books: state.books.filter(item => item.id !== action.id) };
    case BooksActionTypes.GetBookById:
      return { ...state, selectedId:action.id}
    case BooksActionTypes.GetBookByAuthor:
      return { ...state, books: state.books.filter(item => item.authors.match(action.query)) }
    case BooksActionTypes.BooksLoadedSuccess:
      return { ...state, books: action.books, error: '' };
    case BooksActionTypes.HistoryLoadedSuccess:
      return { ...state, history: action.history, error: '' };
    case BooksActionTypes.RemoveBookFailed:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
