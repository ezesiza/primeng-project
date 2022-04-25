import { RemoveBook, GetBookById, GetBookByAuthor } from './../../actions/books.actions';
import { GetAllBooks } from '../../actions/books.actions';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { Store } from '@ngrx/store';
import { getBooks, State } from 'src/app/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls:['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() activeItem;
  books: Book[];
  activeTab: string = 'Table';
  cols: any[];
  currentBook: Book = {};
  displayModal: boolean;
  isDelete: boolean;
  currentUrl = '/table';
  pageUrl: string = '';

  constructor(private store: Store<State>, private router:Router) {
    this.pageUrl = this.router.url;
  }

  ngOnInit() {
    this.cols = [
      { header: 'Book ID' },
      { header: 'Title' },
      { header: 'Author' },
      { header: 'Action' }
    ];
    this.store.dispatch(new GetAllBooks);
    this.store.select(getBooks).subscribe(items=>{
      this.books = items;
    });

  }

  showAuthorDetails(item:Book){
    this.store.dispatch(new GetBookByAuthor(item.authors));
  }

  showDetails(rowData:Book){
    this.currentBook = rowData;
    this.displayModal = true;
  }

  showModalDialog() {
    this.displayModal = true;
  }

  confirmDelete(rowData:Book){
    this.currentBook = rowData;
    this.isDelete = true;
    this.displayModal = true;
  }

  deleteBook(id:any){
    this.store.dispatch(new RemoveBook(id));
    this.displayModal=false;
  }


}
