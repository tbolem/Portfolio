import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('in => out', animate('1000ms ease')),
      transition('out => in', animate('1000ms ease'))
    ])
  ]
})
export class SkillsComponent {
  currentSection: string = 'backend'; // Default section

  showSection(section: string) {
    this.currentSection = section;
  }
}
