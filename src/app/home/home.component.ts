import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getHistory } from '../reducers';
import { Book } from '../models/book.model';
import { GetAllHistory } from '../actions/books.actions';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  items: MenuItem[];
  tabIndex: string = 'Table';
  currentRoute: string;
  history:Book[];

  constructor(private primengConfig: PrimeNGConfig, private router:Router,  private store: Store) {
    this.primengConfig.ripple = true;
    }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Table', routerLink: '/table', id: '1', icon: 'pi pi-fw pi-table' },
      { label: 'Form', routerLink: '/form', id: '2', icon: 'pi pi-fw pi-pencil' },
    ];

    this.store.dispatch(new GetAllHistory);
    this.store.select(getHistory).subscribe(item=>{
      this.history = item
    })
  }
}



