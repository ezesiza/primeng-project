import { GetBookByAuthor } from './../../actions/books.actions';
import { getBooks, getBooksByAuthor } from 'src/app/reducers';
import { Book } from 'src/app/models/book.model';
import {  Store } from '@ngrx/store';
import {  State } from 'src/app/reducers';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  books: Book[];
  displayModal: boolean;
  activeTab: string = 'Table';
  cols: any[];
  author:string;
  isLoading:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    protected router: Router)
    {

      this.cols = [
        { field: 'id', header: 'Serial Number' },
        { field: 'title', header: 'Title' },
        { field: 'isbn', header: 'ISBN' },
        { field: 'details', header: 'Details' }
      ];
     }

  ngOnInit() {
    this.author = this.route.snapshot.paramMap.get('author');
    this.store.dispatch(new GetBookByAuthor(this.author));
    this.store.select(getBooks).subscribe(item=> {
      this.books = item
      this.isLoading = false;
    });


  }

}
