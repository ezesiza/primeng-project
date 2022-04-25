import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {booksReducer, BookState} from './books.reducers';

export interface State {
  books: BookState,
}

export const reducers: ActionReducerMap<State> = {
  books: booksReducer,
};


const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(
  getBookFeatureState,
  state =>  state.books
);

export const getHistory = createSelector(
  getBookFeatureState,
  state =>   [...new Set(state.history.slice(0,6).reverse())]
  );

  export const getBookId = createSelector(
  getBookFeatureState,
  state=>state.selectedId
);

export const bookByAuthorSelect = createSelector(
  getBookFeatureState,
  state =>state.books
);

export const getBooksByAuthor = createSelector(
  getBookFeatureState,
  (state)=>   state.currentAuthor
)

export const getOneBookById = createSelector(
  getBookFeatureState,
  getBookId,
  (state, selectedId) =>  {
    return state.books.find(item=>item.id ===selectedId)
  }
);

export const getError = createSelector(
  getBookFeatureState,
  state => state.error
  );


  // export const bookState = (state: State) => state.books;
  // export const oneBookState = (state: State) => state.books.book;
  // export const bookList = createSelector(bookState, (state: BookState) => state.books);
