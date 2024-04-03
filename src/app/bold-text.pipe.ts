import {Pipe, PipeTransform} from '@angular/core';

interface Replacement {
  original: string;
  boldVersion: string;
}
@Pipe({
  standalone: true,
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform {
  private replacements: Replacement[] = [
    { original: 'Full Stack Java Developer', boldVersion: '<strong>Full Stack Java Developer</strong>' },
    { original: 'Senior Java Developer', boldVersion: '<strong>Senior Java Developer</strong>'},
    // Add more replacements as needed
  ];

  transform(value: string): string {
    // Apply all replacements
    this.replacements.forEach(replacement => {
      value = value.replace(replacement.original, replacement.boldVersion);
    });

    return value;
  }
}
