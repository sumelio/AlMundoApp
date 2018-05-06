import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.services';

@Component({
  selector: '[hotels]',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  findHotelName;
  findStar;
  name;
  hotelList = [];  
  startslList = [];
  checkedAll;
  
  constructor(private hotelsService: HotelsService) {
    this.createFilterStar()
    this.checkedAll = true;
  }

  ngOnInit() {
    this.findHotel()
    this.checkedAll = true;
  }

  onKey(event: Event) {
    var test = (<HTMLInputElement>event.target).value;
    console.log(`findHotelName ${test}` )
  }
  checkStars(id: string, checked: boolean) {
    this.checkedAll = false;
    this.startslList[id].checked = checked;
   
    this.findStar = "";
     for(var i = 0; i < this.startslList.length; i++) {
      if( this.startslList[i].checked ) {
        this.findStar = this.startslList[i].stars.length + "," + this.findStar;
       }       
     }
     this.findHotel();
  }

  onKeyFindHotelByName() {
    this.findHotel();    
  }

  findHotel() {
    this.hotelsService.getHotels(this.findHotelName, this.findStar)
    .subscribe(
      (hotels) =>  this.hotelList = hotels,
      (error)  => console.log("error=" + error)
    );
  }
  createFilterStar() {
    var ids =  0;
    for (var i = 5; i > 0; i--) { 
      var startsArray = [];  
       for (var j = i; j > 0; j--) { 
         startsArray.push(i);
       }
      var obj = {id: ids++, stars: startsArray, checked : false}
      this.startslList.push(obj) ;
   }
  }

  checkAllStars(checked :boolean){ 
    if(checked) {
    for(var i = 0; i < this.startslList.length; i++) {
      this.startslList[i].checked = false;
     }
     this.findStar = "";
     this.findHotel();
    }else {
        console.log("Not star all checked")
    }

  }

}
