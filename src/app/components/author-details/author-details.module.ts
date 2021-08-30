import { PrimeModules } from './../../modules/prime.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailsComponent } from './author-details.component';
import { AuthorDetailsRoutingModule } from './author-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeModules,
    AuthorDetailsRoutingModule
  ],
  declarations: [
    AuthorDetailsComponent
  ],
  exports: [
    AuthorDetailsRoutingModule
  ]
})
export class AuthorDetailsModule { }
