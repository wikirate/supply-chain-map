import {Component, OnInit} from '@angular/core';
import {SupplierDataService} from '../services/supplier-data.service';
import {AddressService} from '../services/address.service';
import {Supplier} from '../types/supplier';
import {Company} from '../types/company';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.less']
})


export class CompanyComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  VIEWS = {
    ALL_COMPANIES: 'ALL_COMPANIES',
    COMPANY_OVERVIEW: 'COMPANY_OVERVIEW'
  };

  currentView = this.VIEWS.ALL_COMPANIES;

  currentCompanyData = null;

  companyData: Company[] = null;


  constructor(private supplierDataService: SupplierDataService, private addressService: AddressService) {
  }

  ngOnInit() {
    this.supplierDataService.getCompanyList().subscribe({
      next: x => {
        this.companyData = x;
        this.companyData.forEach((company: Company) => {
          console.log('company', company)
          this.supplierDataService.getSupplierList(company.id).subscribe((suppliers: Supplier[]) => {
            company.suppliers = suppliers;
            company.suppliers.splice(0,4).forEach((supplier: Supplier) => {
              // console.log('xxxx');
              let myAddress = this.addressService.getAddress(supplier.name);
              myAddress.subscribe(
                  (x) => {
                      console.log('supplier:', x)
                     supplier.address = x.address;
                      supplier.lat = x.lat;
                      supplier.long = x.long;

                  }
              )
            });
          });
        });
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
