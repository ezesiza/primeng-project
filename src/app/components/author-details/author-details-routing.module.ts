import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorDetailsComponent,
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
export class AuthorDetailsRoutingModule { }
