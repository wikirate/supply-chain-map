import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'

  },
  {
    path: 'map',
    component: OverviewComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
