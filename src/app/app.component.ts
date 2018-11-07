import { Component } from '@angular/core';
import {SupplierDataService} from './services/supplier-data.service';
import {Company} from './types/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-map-app';

  constructor(private supplierDataService: SupplierDataService) {
    supplierDataService.getCompanyList().subscribe((data: Company[]) => console.log(data));
  }
}
