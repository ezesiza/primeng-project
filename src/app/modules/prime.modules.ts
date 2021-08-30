import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { RippleModule } from "primeng/ripple";
import {TabMenuModule} from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from "primeng/divider";
import { ChipModule } from 'primeng/chip';
import { CardModule, } from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


const primeModules=[
  TableModule,
  ProgressSpinnerModule,
  CardModule,
  DividerModule,
  TabMenuModule,
  RippleModule,
  TabViewModule,
  PanelModule,
  ChipModule,
  AutoCompleteModule,
  InputTextareaModule,
  CascadeSelectModule,
  CalendarModule,
  ChipsModule,
  InputNumberModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  ButtonModule,
  ToastModule,
  InputTextModule,
  ProgressBarModule,
  InputMaskModule,
  DropdownModule]

@NgModule({
  declarations: [

  ],
  imports: [...primeModules],
  exports: [...primeModules]
})
export class PrimeModules { }
