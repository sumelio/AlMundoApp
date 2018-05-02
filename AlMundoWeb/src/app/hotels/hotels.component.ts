import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[hotels]',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  findHotelName;
  name;
  hotelList = ['hotel 1', 'hotel 2'];

  constructor() {

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
  }


}
