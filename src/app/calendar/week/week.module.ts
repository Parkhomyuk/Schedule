import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { GridColumnsComponent } from './components/content/grid-columns/grid-columns.component';
import { GridHeaderComponent } from './components/content/grid-header/grid-header.component';
import { GridRowsComponent } from './components/content/grid-rows/grid-rows.component';
import { UtilsModule } from 'src/app/utils/utils.module';

import {MatMenuModule} from '@angular/material/menu';
import { TimeDetectorDirective } from '../directives/time-detector.directive';
import { TimePinComponent } from '../utils/time-pin/time-pin.component';
 
 
 
 

@NgModule({
  declarations: [
    ContentComponent,
    GridColumnsComponent,
    GridHeaderComponent,
    GridRowsComponent,
    TimeDetectorDirective,
    TimePinComponent 
  ],
  imports: [
    CommonModule,
    UtilsModule,
    MatMenuModule,
    
  ],
  exports:[ContentComponent, GridHeaderComponent, TimeDetectorDirective,]
})
export class WeekModule { }
