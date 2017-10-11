import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockuiComponent } from '../components/blockui/blockui.component';
import {Panel} from "../components/panel/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Button} from "../components/button/button";

@NgModule({
  declarations: [
    AppComponent,
    BlockuiComponent,
    Panel,
    Button
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
