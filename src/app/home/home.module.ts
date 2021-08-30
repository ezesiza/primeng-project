import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimeModules } from '../modules/prime.modules';

@NgModule({
  imports: [CommonModule, PrimeModules, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
