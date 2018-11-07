import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../types/company';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Supplier} from '../types/supplier';

@Injectable()
export class SupplierDataService {

  private BASE_URL: string = 'https://wikirate.org';

  constructor(private http: HttpClient) {}

  getCompanyList() : Observable<Company[]> {
    return this.http.get(`${this.BASE_URL}/Commons+Supplied_By+Record.json`)
      .pipe(map((data: any) => data.items as Company[]));
  }
}
