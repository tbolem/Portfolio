import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BoldTextPipe} from "./bold-text.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ResumeComponent, ContactComponent, AboutMeComponent, BoldTextPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  isOffcanvasOpen = false;
  title: 'Teja-Portfolio' | undefined;

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  closeOffcanvas() {
    this.isOffcanvasOpen = false;
  }
}




