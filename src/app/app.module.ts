import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {BoldTextPipe} from "./bold-text.pipe";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoldTextPipe,
    AppComponent
  ],
})
export class AppModule { }
