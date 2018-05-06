import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class HotelsService {

    url = 'http://localhost:3000';

    constructor(private http: Http) {}
    getHotels(name :string, stars : string) {
        return this.http.get( this.url+"/almundo/hotels?name=" + name + "&stars="+ stars)
        .map(
            (response) => {
                const data = response.json();
                for (const hotel of data) {
                  hotel.image =   "../../assets/images/hotels/" + hotel.image;
                }
                return data;
            }
        );

    }
}