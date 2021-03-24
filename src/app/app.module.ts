import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InlineSVGModule} from 'ng-inline-svg';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { BotListFilterComponent } from './pages/bot-list-filter/bot-list-filter.component';
import { TraderGraphComponent } from './pages/trader-graph/trader-graph.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { GraphComponent } from './pages/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BotListFilterComponent,
    TraderGraphComponent,
    MonitoringComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InlineSVGModule,
    HttpClientModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
