import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass'
})

export class WelcomeComponent implements OnInit {
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
}
