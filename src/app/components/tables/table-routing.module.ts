// import { BookDetailComponent } from '../book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table.component';


const routes: Routes = [
  {
    path: '',
    component: TableComponent,
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
export class TableRoutingModule { }
