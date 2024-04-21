import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BoldTextPipe} from "../bold-text.pipe";

interface Project {

}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, BoldTextPipe],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass',
  encapsulation: ViewEncapsulation.None  // Disable view encapsulation
})
export class ResumeComponent {

}
