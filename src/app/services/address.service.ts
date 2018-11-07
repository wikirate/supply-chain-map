import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../types/company';
import {Address} from '../types/address';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AddressService {

    constructor(private http: HttpClient) {
    }

    getAddress(companyName) : Address{
        return this.http.get("/assets/data/addr.json").subscribe(
            (json: any) => {
                console.log(json)
                return json.addresses.filter(address => address.company === companyName)[0]
            }
        ) as Address
    }

}
