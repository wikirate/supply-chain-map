import { Component } from '@angular/core';
import {SupplierDataService} from './services/supplier-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-map-app';

  constructor(private supplierDataService: SupplierDataService) {
  }
}
