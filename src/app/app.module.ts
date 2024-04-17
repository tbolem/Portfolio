import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {BoldTextPipe} from "./bold-text.pipe";
import {AppRoutingModule} from "./app.routes";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoldTextPipe,
    AppComponent,
    AppRoutingModule,
    RouterModule],
})
export class AppModule { }
