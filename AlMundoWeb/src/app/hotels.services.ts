import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Injectable()
export class HotelsService {

    url = 'http://localhost:3000';

    constructor(private http: Http) {

    }

    getHotels(hotels: any[],name :string, stars : string) {
        var paramStars = "";
        var paramName = "";

        //if(stars != null) {
            paramStars = "&stars="+ stars;
        //} else {
          //  console.log("starts parameter is null");
        //}

        //if(name != null) {
            paramName = "name=" + name;
            // }else {

       // }
        return this.http.get( this.url+"/almundo/hotels?name=" + name + "&stars="+ stars)
          //.map(response => response.json()
         ;

  


            
    }
}