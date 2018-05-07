import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.services';

@Component({
  selector: '[hotels]',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotelList = [];  

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.findHotels(null , null)
  }
/*
  onKey(event: Event) {
    var test = (<HTMLInputElement>event.target).value;
    console.log(`findHotelName ${test}` )
  }
*/

  findHotels(findHotelName: string, findStar: string) {
    this.hotelsService.getHotels(findHotelName, findStar)
    .subscribe(
      (hotels) =>  this.hotelList = hotels,
      (error)  => console.log("error=" + error)
    );
  }





}
