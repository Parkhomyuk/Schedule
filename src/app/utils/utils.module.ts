import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerDirective } from './directives/marker.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { UnsubComponent } from './components/unsub/unsub.component';
import { DndDirective } from './directives/dnd.directive';



@NgModule({
  declarations: [
    MarkerDirective,
    TooltipComponent,
    UnsubComponent,
    DndDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[MarkerDirective, TooltipComponent, UnsubComponent, DndDirective]
})
export class UtilsModule { }
