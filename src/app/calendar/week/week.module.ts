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
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewEventDetailsComponent } from './components/new-event/new-event-details/new-event-details.component';
import { MatIconModule } from '@angular/material/icon';
import { ResizeDirective } from './components/new-event/resize.directive';
 
 
 
 

@NgModule({
  declarations: [
    ContentComponent,
    GridColumnsComponent,
    GridHeaderComponent,
    GridRowsComponent,
    TimeDetectorDirective,
    TimePinComponent,
    NewEventComponent,
    NewEventDetailsComponent,
    ResizeDirective 
  ],
  imports: [
    CommonModule,
    UtilsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[ContentComponent, GridHeaderComponent, TimeDetectorDirective,]
})
export class WeekModule { }
