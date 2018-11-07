import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../types/company';
import {Observable} from 'rxjs';
import {map, reduce} from 'rxjs/operators';
import {Supplier} from '../types/supplier';

@Injectable()
export class SupplierDataService {

  private BASE_URL: string = 'https://wikirate.org';

  constructor(private http: HttpClient) {
  }

  getCompanyList(): Observable<Company[]> {
    return this.getCompaniesFromMetric('Commons+Supplied_By');
  }


  private getCompaniesFromMetric(endpoint: string): Observable<Company[]> {
    return this.getWikirateJson(`${endpoint}+Record.json`).pipe(
      map((data: any) =>
        (data.items as any[])
          .map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              company: item.object_company,
              value: item.value,
              year: item.year
            } as Company;
          })
      ));
  }

  getSupplierList(companyId: number): Observable<Supplier[]> {
    return this.getWikirateJson(`~${companyId}.json`)
      .pipe(
        map(data => data.items as any[]),
        reduce((acc: Array, suppliers: any[]) => {
          suppliers.forEach((item: any) =>
          acc.push({
            id: item.id,
            name: item.name,
            object_company: item.object_company,
            subject_company: item.subject_company,
            value: item.value,
            year: item.year
          } as Supplier));
          return acc;
        }, [])
      );
  }

  getAddress(supplierName: string): Observable<string> {
    return this.getWikirateJson(`Clean_Clothes_Campaign+Address+${supplierName}`)
      .pipe(map((data: any) => data.items[0].value));
  }

  getWikirateJson(resource: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${resource}`);
  }

}
