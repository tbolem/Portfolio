import { Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { WelcomeComponent } from '../welcome/welcome.component';

export const routes: Routes = [
    {
        path: '', component: WelcomeComponent
    },
    {
        path: 'contact', component: ContactComponent
    }
];
