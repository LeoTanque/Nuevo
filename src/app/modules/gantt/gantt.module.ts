import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttRoutingModule } from './gantt-routing.module';
import { GanttComponent } from './gantt/gantt.component';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GanttComponent
  ],
  imports: [
    CommonModule,
    GanttRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class GanttModule { }
