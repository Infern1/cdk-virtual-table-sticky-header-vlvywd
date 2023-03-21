import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableModule} from '@angular/material';
import {ScrollingModule} from "@angular/cdk/scrolling";

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CdkTableModule, ScrollingModule, MatTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
