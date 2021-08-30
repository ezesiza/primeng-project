import { getHistory } from '../../reducers/index';
import { AddBookToHistory } from '../../actions/books.actions';
import { getOneBookById } from 'src/app/reducers';
import { Book } from 'src/app/models/book.model';
import { GetBookById } from '../../actions/books.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store){

  }

    ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.store.dispatch(new GetBookById(id));
      this.store.select(getOneBookById).subscribe(item=> {
        this.book = item;
        this.isLoading=false;
      });
      if(id){
        this.store.dispatch(new AddBookToHistory(this.book))
      }
  }

}
