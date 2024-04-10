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
      workPoints: ['* Interning as Program Analyst, implementing the Java-based E-commerce application using Java 17, Spring Framework, and Angular, adhering to Agile methodology.'
      ,'* Successfully orchestrated the deployment of Microservice architecture using RESTful services.']
    },
    {
      companyName: 'MagTech Solutions And Corporation, NJ',
      roleName: 'Java Full Stack Developer Intern',
      timePeriod: 'May 2023 – Nov 2023',
      workPoints: ['* Implemented RESTful APIs using Java 11 for inter-service communication, ensuring efficient and decoupled interactions within the Microservices ecosystem.',
      '* Utilized MySQL to access data in the database at different levels, responsible for implementing SQL queries and managing JDBC interactions with data sources.']
    },
  ];
}
