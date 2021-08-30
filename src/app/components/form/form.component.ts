import { getBooks } from 'src/app/reducers';
import { CreateBooks, GetAllBooks } from './../../actions/books.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls:['./form.component.css']
})
export class FormComponent implements OnInit{
  form: FormGroup;
  tabIndex: string = 'Table';
  submitted = false;

    constructor(
      private route:ActivatedRoute,
      private router:Router,
      private store:Store) {

      }

    ngOnInit() {
      this.form = new FormGroup({
        title: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(7)]
        }),
        authors: new FormControl(null, { validators: [Validators.required] }),
        isbn: new FormControl(null, { validators: [Validators.required] })
      }); //this.form
    }

    register() {
      this.submitted = true;

      if (this.form.invalid) {
        return;
      }

      let book:Book = {
        isbn:this.form.value.isbn,
        title:this.form.value.title,
        authors:this.form.value.authors,
      }
      this.store.dispatch(new CreateBooks(book))
      this.form.reset();
      this.router.navigate(['/table'])

    }

    onBackClick(){
      this.router.navigate(['/table'])
    }

}
