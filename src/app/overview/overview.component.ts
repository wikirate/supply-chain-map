import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  markers: LocationMarker[] = [];

  constructor() {
  }

  ngOnInit() {
    this.markers.push(
      {
        label: 'Berlin',
        lat: 52.5243700,
        lng: 13.4105300
      },
      {
        label: 'São Paulo',
        lat: -23.541062,
        lng: -46.616177
      },
      {
        label: 'Beijing',
        lat: 39.9075000,
        lng: 116.3972300
      }
    )
  }

}

interface LocationMarker {
  lat: number;
  lng: number;
  label: string;
}
