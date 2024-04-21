import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BoldTextPipe} from "../bold-text.pipe";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

class Project {
  companyName: string | undefined;
  roleName: string | undefined;
  timePeriod: string | undefined;
  workPoints: string[] | undefined;
}
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    BoldTextPipe,
    NgForOf,
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass',
  encapsulation: ViewEncapsulation.None,
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
export class WelcomeComponent implements OnInit{
//for welcome section
  jobTitles: string[] = ['Java Developer', 'Frontend Designer', 'Java Developer'];
  currentIndex: number = 0;
  jobTitle: string = '';

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.jobTitles.length) {
      let title = this.jobTitles[this.currentIndex];
      let index = 0;
      let speed = 120; // Adjust typing speed as needed

      const typing = () => {
        if (index < title.length) {
          this.jobTitle += title.charAt(index);
          index++;
          setTimeout(typing, speed);
        } else {
          setTimeout(() => {
            if (this.currentIndex < this.jobTitles.length - 1) {
              this.clearText();
            }
          }, 2000); // Adjust delay before clearing text
        }
      };

      typing();
    }
  }

  clearText() {
    let title = this.jobTitles[this.currentIndex];
    let index = title.length;
    let speed = 50; // Adjust clearing speed as needed

    const deleting = () => {
      if (index >= 0) {
        this.jobTitle = title.substring(0, index);
        index--;
        setTimeout(deleting, speed);
      } else {
        this.currentIndex++;
        this.typeWriter();
      }
    };

    deleting();
  }

  //for skills section
  currentSection: string = 'backend'; // Default section

  showSection(section: string) {
    this.currentSection = section;
  }

  //for resume section
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
