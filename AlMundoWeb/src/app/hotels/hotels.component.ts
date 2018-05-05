import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.services';

@Component({
  selector: '[hotels]',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  findHotelName;
  name;
  hotelList = ['hotel 1', 'hotel 2'];

  constructor(private hotelsService: HotelsService) {

    console.log('hotelList ' + this.hotelList)

   }

  ngOnInit() {
  }

  onKey(event: Event) {
    var test = (<HTMLInputElement>event.target).value;
    console.log(`findHotelName ${test}` )
  }

  onKeyFindHotelByName() {
    console.log(`findHotelName ${this.findHotelName}` )

    this.hotelsService.getHotels(this.hotelList, this.findHotelName, null)
    .subscribe(
      (response) => {
        console.log("response="+response)

        this.hotelList = response.json();
      }
      ,
      (error)  => console.log("error=" + error)
    );
    
  }


}
