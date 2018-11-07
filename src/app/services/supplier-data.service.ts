import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../types/company';
import {Supplier} from '../types/supplier';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class SupplierDataService {

  private BASE_URL: string = 'https://wikirate.org';

  constructor(private http: HttpClient) {
  }

  getSupplierList(id): Observable<Supplier[]> {
      return of([{
          object_company : "Ningbo Yinzhou Yangyang Finery Co. Ltd.",
          address : "61 Fengqi Road, Yinzhou, Ningbo, Zhejiang, China",
          lat : "29.8245724",
          lon : "121.5806845"
      } as Supplier])
      // return this.http.get(`${this.BASE_URL}/Commons+Supplied_By+Record.json`)
      //     .pipe(
      //         map((data: any) =>
      //             (data.items as any[])
      //                 .map((item: any) => {
      //                     return {
      //                         id: item.id,
      //                         name: item.name,
      //                         company: item.company,
      //                         value: item.value,
      //                         year: item.year
      //                     } as Supplier
      //                 })
      //         ));
  }

  getCompanyList(): Observable<Company[]> {
    return this.http.get(`${this.BASE_URL}/Commons+Supplied_By+Record.json`)
      .pipe(
        map((data: any) =>
          (data.items as any[])
            .map((item: any) => {
              return {
                id: item.id,
                name: item.name,
                company: item.company,
                value: item.value,
                year: item.year
              } as Company
            })
        ));
  }

}
