import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OverviewComponent} from "./overview/overview.component";
import {AgmCoreModule} from "@agm/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    OverviewComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CompanyComponent
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
