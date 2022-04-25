import { TableModule } from 'primeng/table';
import { PrimeModules } from './../../modules/prime.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeModules,
    TableModule,
    TableRoutingModule
  ],
  declarations: [
    TableComponent,
  ],
  exports: [
    TableRoutingModule
  ]
})
export class TablesModule { }
