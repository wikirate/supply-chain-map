import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  companies: LocationMarker[] = [
    {
      label: 'Company 1',
      lat: 52.5243700,
      lng: 13.4105300,
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
      label: 'Company 2',
      lat: -23.541062,
      lng: -46.616177,
      suppliers: []
    },
    {
      label: 'Company 3',
      lat: 39.9075000,
      lng: 116.3972300,
      suppliers: []
    }];


  constructor() {
  }

  ngOnInit() {
  }

}

interface LocationMarker {
  lat: number;
  lng: number;
  label: string;
  suppliers: any[];
}
