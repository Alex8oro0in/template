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
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { GraphComponent } from './pages/graph/graph.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {Daterangepicker} from "ng2-daterangepicker";

@NgModule({
  declarations: [
    AppComponent,
    BotListFilterComponent,
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
    NgApexchartsModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    Daterangepicker
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
