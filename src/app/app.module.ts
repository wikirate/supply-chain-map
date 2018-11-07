import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OverviewComponent} from "./overview/overview.component";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    OverviewComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyB-TELjOeFgDQumKiPhhJeYXlF4mMGdKDU'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
