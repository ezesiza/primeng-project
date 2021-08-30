import { reducers } from './reducers/index';
import { BooksEffects } from './effects/books.effects';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import {PrimeModules} from './modules/prime.modules';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PrimeModules,
    EffectsModule.forRoot([BooksEffects]),
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
