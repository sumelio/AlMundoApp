import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.services';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  hotelList = [];  

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.findHotels("" , "")
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
