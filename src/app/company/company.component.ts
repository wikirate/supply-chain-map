import { Component, OnInit } from '@angular/core';
import {SupplierDataService} from "../services/supplier-data.service";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.less']
})


export class CompanyComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  VIEWS = {
    ALL_COMPANIES: "ALL_COMPANIES",
    COMPANY_OVERVIEW: "COMPANY_OVERVIEW"
  }

  currentView = this.VIEWS.ALL_COMPANIES;

  currentCompanyData = null;

  companyData = null;

  constructor(private supplierDataService: SupplierDataService) {
  }

  ngOnInit() {
    this.supplierDataService.getCompanyList().subscribe({
      next: x => {
          this.companyData = x;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    })
  }

  showCompanyData(companyData) {
    this.currentCompanyData = companyData;
    this.goToView(this.VIEWS.COMPANY_OVERVIEW);
  }

  goToView(view) {
    this.currentView = view;
  }
}
