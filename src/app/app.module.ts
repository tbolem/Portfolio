// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent removed because it's standalone
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // <-- Add this here
    AppComponent, // <-- Import standalone component here
    // other modules
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }