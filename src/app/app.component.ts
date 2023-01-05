import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUIState } from './store/models/uiState.interface';
import { sidePanelSelector } from './store/selectors/ui.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'schedule-front';
  sidePanelState$!: Observable<boolean>;
  constructor(private store: Store<IUIState>){}
  ngOnInit(): void {
    this.sidePanelState$=this.store.pipe(select(sidePanelSelector))
  }
}
