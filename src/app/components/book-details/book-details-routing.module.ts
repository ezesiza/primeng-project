import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookDetailComponent,
    children: [
      {
        path: '/',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class BookDetailRoutingModule { }
