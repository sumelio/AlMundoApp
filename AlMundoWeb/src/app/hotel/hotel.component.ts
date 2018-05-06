import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hotel',
    templateUrl: './hotel.component.html'
})
export class HotelComponent implements OnInit {
 id: number = 10;
 name: string = 'Hotel california'

 @Input() hotelItem;

 stars;

 constructor() {}

 ngOnInit() {
    this.stars = new Array(this.hotelItem.stars)
  }
}