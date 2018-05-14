import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
 filename : String = '';

 @Input() hotelItem;

 stars;

 constructor() {}

 ngOnInit() {
    this.stars = new Array(this.hotelItem.stars)
  }
}