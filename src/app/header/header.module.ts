import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuvComponent } from './nuv/nuv.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NuvComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  exports:[NuvComponent]
})
export class HeaderModule { }
