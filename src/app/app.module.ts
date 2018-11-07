import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {SupplierDataService} from './services/supplier-data.service';
import {AddressService} from './services/address.service';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {OverviewComponent} from './overview/overview.component';
import {AgmCoreModule} from '@agm/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CompanyComponent} from './company/company.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    OverviewComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CompanyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDWk0GSzb8laOLwKxvdzeOWDcbAs-ywjSg'}),
    FontAwesomeModule
  ],
  providers: [SupplierDataService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
