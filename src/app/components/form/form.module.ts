import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModules } from './../../modules/prime.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeModules,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ],
  declarations: [
    FormComponent
  ],
  exports: [
    FormRoutingModule
  ]
})
export class FormModule { }
