import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BoldTextPipe} from "../bold-text.pipe";

interface Project {
  companyName: string;
  roleName: string;
  timePeriod: string;
  workPoints: string[];
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
  projects: Project[] = [
    {
      companyName: 'Cyber Infotech, MD',
      roleName: 'Program Analyst Intern',
      timePeriod: ' Dec 2023 – Present',
      workPoints: ['Assisted senior developers in analyzing and resolving issues within Java applications, contributing to enhanced functionality and performance.',
      'Documented code changes, development processes, and project updates, preparing technical documentation and reports to facilitate effective project management and communication.']
    },
    {
      companyName: 'MagTech Solutions And Corporation, NJ',
      roleName: 'Java Full Stack Developer Intern',
      timePeriod: 'May 2023 – Nov 2023',
      workPoints: ['Translated application storyboards and use cases into functional applications, demonstrating a strong understanding of user requirements and the ability to implement them effectively.',
        'Designed, built, and maintained efficient, reusable, and reliable Java code, ensuring high performance and scalability of applications.']
    },
  ];
}
