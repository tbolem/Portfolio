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
    { original: 'Program Analyst', boldVersion: '<strong>Program Analyst</strong>' },
    { original: 'Full Stack Java Developer', boldVersion: '<strong>Full Stack Java Developer</strong>'},
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
