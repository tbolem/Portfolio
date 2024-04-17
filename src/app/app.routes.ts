import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AboutMeComponent} from "./about-me/about-me.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure router
  exports: [RouterModule] // Make router directives available to other modules
})
export class AppRoutingModule { }
