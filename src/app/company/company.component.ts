import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.less']
})


export class CompanyComponent implements OnInit {
  VIEWS = {
    ALL_COMPANIES: "ALL_COMPANIES",
    COMPANY_OVERVIEW: "COMPANY_OVERVIEW"
  }

  currentView = this.VIEWS.ALL_COMPANIES;

  currentCompanyData = null;

  data = {
    "id": null,
    "name": "Commons+Supplied By+record",
    "type": {
      "id": 3,
      "name": "Basic",
      "type": "Cardtype",
      "url": "https://wikirate.org/Basic.json",
      "codename": "basic"
    },
    "url": "https://wikirate.org/Commons+Supplied_By+record.json",
    "content": "",
    "items": [
      {
        "id": 3255478,
        "name": "Commons+Supplied By+The Walt Disney Company+2016",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+The_Walt_Disney_Company+2016.json",
        "metric": "Commons+Supplied By",
        "company": "The Walt Disney Company",
        "year": "2016",
        "value": "5745",
        "record_url": "https://wikirate.org/Commons+Supplied_By+The_Walt_Disney_Company.json"
      },
      {
        "id": 2929027,
        "name": "Commons+Supplied By+H & M Hennes & Mauritz AB+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+H_M_Hennes_Mauritz_AB+2017.json",
        "metric": "Commons+Supplied By",
        "company": "H & M Hennes & Mauritz AB",
        "year": "2017",
        "value": "1113",
        "record_url": "https://wikirate.org/Commons+Supplied_By+H_M_Hennes_Mauritz_AB.json"
      },
      {
        "id": 3457575,
        "name": "Commons+Supplied By+Kmart Australia+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Kmart_Australia+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Kmart Australia",
        "year": "2017",
        "value": "762",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Kmart_Australia.json"
      },
      {
        "id": 3448434,
        "name": "Commons+Supplied By+C&A+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+C_A+2017.json",
        "metric": "Commons+Supplied By",
        "company": "C&A",
        "year": "2017",
        "value": "674",
        "record_url": "https://wikirate.org/Commons+Supplied_By+C_A.json"
      },
      {
        "id": 3241326,
        "name": "Commons+Supplied By+VF Corporation+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+VF_Corporation+2017.json",
        "metric": "Commons+Supplied By",
        "company": "VF Corporation",
        "year": "2017",
        "value": "624",
        "record_url": "https://wikirate.org/Commons+Supplied_By+VF_Corporation.json"
      },
      {
        "id": 3625962,
        "name": "Commons+Supplied By+Nike Inc+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Nike_Inc+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Nike Inc",
        "year": "2017",
        "value": "577",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Nike_Inc.json"
      },
      {
        "id": 3099316,
        "name": "Commons+Supplied By+Asos+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Asos+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Asos",
        "year": "2017",
        "value": "541",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Asos.json"
      },
      {
        "id": 3222762,
        "name": "Commons+Supplied By+Levi Strauss & Co.+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Levi_Strauss_Co+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Levi Strauss & Co.",
        "year": "2017",
        "value": "530",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Levi_Strauss_Co.json"
      },
      {
        "id": 3438457,
        "name": "Commons+Supplied By+Tesco PLC+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Tesco_PLC+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Tesco PLC",
        "year": "2017",
        "value": "498",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Tesco_PLC.json"
      },
      {
        "id": 3471182,
        "name": "Commons+Supplied By+Target Australia+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Target_Australia+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Target Australia",
        "year": "2017",
        "value": "492",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Target_Australia.json"
      },
      {
        "id": 3757476,
        "name": "Commons+Supplied By+PVH+2018",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+PVH+2018.json",
        "metric": "Commons+Supplied By",
        "company": "PVH",
        "year": "2018",
        "value": "441",
        "record_url": "https://wikirate.org/Commons+Supplied_By+PVH.json"
      },
      {
        "id": 3247974,
        "name": "Commons+Supplied By+Benetton Group Spa+2016",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Benetton_Group_Spa+2016.json",
        "metric": "Commons+Supplied By",
        "company": "Benetton Group Spa",
        "year": "2016",
        "value": "407",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Benetton_Group_Spa.json"
      },
      {
        "id": 3219098,
        "name": "Commons+Supplied By+Varner Retail+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Varner_Retail+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Varner Retail",
        "year": "2017",
        "value": "305",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Varner_Retail.json"
      },
      {
        "id": 3252453,
        "name": "Commons+Supplied By+Columbia Sportswear+2016",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Columbia_Sportswear+2016.json",
        "metric": "Commons+Supplied By",
        "company": "Columbia Sportswear",
        "year": "2016",
        "value": "282",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Columbia_Sportswear.json"
      },
      {
        "id": 3491181,
        "name": "Commons+Supplied By+Stockmann Oyj Abp+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Stockmann_Oyj_Abp+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Stockmann Oyj Abp",
        "year": "2017",
        "value": "204",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Stockmann_Oyj_Abp.json"
      },
      {
        "id": 3620707,
        "name": "Commons+Supplied By+Lindex+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Lindex+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Lindex",
        "year": "2017",
        "value": "185",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Lindex.json"
      },
      {
        "id": 3226491,
        "name": "Commons+Supplied By+Hugo Boss AG+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Hugo_Boss_AG+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Hugo Boss AG",
        "year": "2017",
        "value": "151",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Hugo_Boss_AG.json"
      },
      {
        "id": 3653624,
        "name": "Commons+Supplied By+Uniqlo Co+2018",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Uniqlo_Co+2018.json",
        "metric": "Commons+Supplied By",
        "company": "Uniqlo Co",
        "year": "2018",
        "value": "140",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Uniqlo_Co.json"
      },
      {
        "id": 3434985,
        "name": "Commons+Supplied By+New Balance Athletic Shoe Inc.+2016",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+New_Balance_Athletic_Shoe_Inc+2016.json",
        "metric": "Commons+Supplied By",
        "company": "New Balance Athletic Shoe Inc.",
        "year": "2016",
        "value": "134",
        "record_url": "https://wikirate.org/Commons+Supplied_By+New_Balance_Athletic_Shoe_Inc.json"
      },
      {
        "id": 3456864,
        "name": "Commons+Supplied By+Coles Supermarkets Australia Pty Ltd+2017",
        "type": "Answer",
        "url": "https://wikirate.org/Commons+Supplied_By+Coles_Supermarkets_Australia_Pty_Ltd+2017.json",
        "metric": "Commons+Supplied By",
        "company": "Coles Supermarkets Australia Pty Ltd",
        "year": "2017",
        "value": "59",
        "record_url": "https://wikirate.org/Commons+Supplied_By+Coles_Supermarkets_Australia_Pty_Ltd.json"
      }
    ],
    "links": [

    ],
    "ancestors": [
      {
        "id": 3411173,
        "name": "Commons",
        "type": "Research Group",
        "url": "https://wikirate.org/Commons.json"
      },
      {
        "id": 2929008,
        "name": "Supplied By",
        "type": "Metric Title",
        "url": "https://wikirate.org/Supplied_By.json"
      },
      {
        "id": 3318057,
        "name": "Record",
        "type": "Cardtype",
        "url": "https://wikirate.org/Record.json",
        "codename": "record"
      },
      {
        "id": 2929009,
        "name": "Commons+Supplied By",
        "type": "Metric",
        "url": "https://wikirate.org/Commons+Supplied_By.json"
      }
    ],
    "html_url": "https://wikirate.org/Commons+Supplied_By+record"
  }

  constructor() { }

  ngOnInit() {
  }

  showCompanyData(companyData) {
    this.currentCompanyData = companyData;
    this.goToView(this.VIEWS.COMPANY_OVERVIEW);
  }

  goToView(view) {
    this.currentView = view;
  }
}
