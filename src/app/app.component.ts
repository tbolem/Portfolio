import {Component, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SkillsComponent} from "./skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ResumeComponent, WelcomeComponent, ContactComponent, AboutMeComponent, SkillsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  isOffcanvasOpen = false;
  title: 'Teja-Portfolio' | undefined;

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  closeOffcanvas() {
    this.isOffcanvasOpen = false;
  }

  ngOnInit() { }
}




