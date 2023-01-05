import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { NavigatorComponent } from './panel/navigator/navigator.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule, TooltipComponent} from '@angular/material/tooltip'; 
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    PanelComponent,
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
     
    UtilsModule
  ],
  exports:[
    PanelComponent
  ]
})
export class SidepanelModule { }
