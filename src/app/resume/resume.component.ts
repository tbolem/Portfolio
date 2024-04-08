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
      companyName: 'Cyber InfoTech, MD',
      roleName: 'Program Analyst Intern',
      timePeriod: ' Dec 2023 – Present',
      workPoints: ['Contributed to designing and implementing Java-based E-commerce applications using Java 17, Spring Framework, and Angular, adhering to Agile methodology.',
      'Assisted senior developers in resolving issues within the application, utilizing Junit test cases for improved functionality.',
      'Facilitated effective communication between MongoDB database by leveraging Spring MVC.',]
    },
    {
      companyName: 'MagTech Solutions And Corporation, NJ',
      roleName: 'Java Full Stack Developer Intern',
      timePeriod: 'May 2023 – Nov 2023',
      workPoints: ['Translated application storyboards and user requirements into functional applications, showcasing expertise in Java 11, Spring Framework, and Microservices architecture.',
      'Designed, developed, and maintained efficient Java code with high performance and scalability using JUnit, Maven, HTML5, CSS3, Bootstrap, and MySQL.']
    },
  ];
}
