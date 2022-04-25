import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';


const routes: Routes = [
  {
    path: '',
    component: FormComponent,
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
export class FormRoutingModule { }
