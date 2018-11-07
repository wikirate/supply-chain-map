import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../types/company';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AddressService {
    constructor(private http: HttpClient) {
    }

}
