import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactComponent} from "./contact/contact.component";
import {WelcomeComponent} from "./welcome/welcome.component";

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot for root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
