import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerDirective } from './directives/marker.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { UnsubComponent } from './components/unsub/unsub.component';



@NgModule({
  declarations: [
    MarkerDirective,
    TooltipComponent,
    UnsubComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MarkerDirective, TooltipComponent, UnsubComponent]
})
export class UtilsModule { }
