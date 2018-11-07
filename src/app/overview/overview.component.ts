import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  companies: LocationMarker[] = [
    {
      company: 'Company 1',
      lat: 52.5243700,
      lon: 13.4105300,
      suppliers: [
        {
          label: 'Supplier 1',
          lat: 20.5243700,
          lng: 18.4105300
        },
        {
          label: 'Supplier 2',
          lat: -50.541062,
          lng: -44.616177
        },
        {
          label: 'Supplier 3',
          lat: 23.9075000,
          lng: 120.3972300
        }]
    },
    {
      company: 'Company 2',
      lat: -23.541062,
      lon: -46.616177,
      suppliers: []
    },
    {
      company: 'Company 3',
      lat: 39.9075000,
      lon: 116.3972300,
      suppliers: []
    }];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/data/addr.json').subscribe((addresses: any) => {
      this.companies = addresses.addresses;
    })
  }

}

interface LocationMarker {
  lat: number;
  lon: number;
  company: string;
  suppliers: any[];
}
