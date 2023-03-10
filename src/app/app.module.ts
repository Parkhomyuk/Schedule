import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';
import { HeaderModule } from './header/header.module';
import { SidepanelModule } from './sidepanel/sidepanel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { spinnerReducer } from './store/reducers/spinner.reducer';
import { dateReducer } from './store/reducers/currentDate.reducer';
import { environment } from '../environments/environment';
import { uiReducer } from './store/reducers/uiState.reducer';
import { ScheduleModule } from './schedule/schedule.module';

import {HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api'
import { InMemoryDataService } from './app.db';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    HeaderModule,
    SidepanelModule,
    ScheduleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({spinnerReducer:spinnerReducer , dateReducer: dateReducer, uiReducer: uiReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
  //  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
