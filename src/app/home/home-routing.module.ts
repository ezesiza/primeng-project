import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'table',
      loadChildren: () => import('../components/tables/table.module').then(m => m.TablesModule)
    },
    {
      path: 'form',
      loadChildren: () => import('../components/form/form.module').then(m => m.FormModule)
    },
    {
      path: 'table/details/:id',
      loadChildren: () => import('../components/book-details/book-details.module').then(m => m.BookDetailModule)
    },
    {
      path: 'table/author/:author',
      loadChildren: () => import('../components/author-details/author-details.module').then(m => m.AuthorDetailsModule)
    }
  ]
};
