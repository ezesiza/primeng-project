import { PrimeModules } from './../../modules/prime.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-details.component';
import { BookDetailRoutingModule } from './book-details-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PrimeModules,
    BookDetailRoutingModule
  ],
  declarations: [
    BookDetailComponent
  ],
  exports: [
    BookDetailRoutingModule
  ]
})
export class BookDetailModule { }
