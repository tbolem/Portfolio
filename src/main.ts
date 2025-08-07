// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- Add this import

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations() // <-- Add this function call
  ]
};