import { Component, OnInit } from '@angular/core';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  findHotelName;
  findStar;
  name;
  startslList = [];
  checkedAll;
  showFilterName = false;
  showFilterStar = true;
  

  constructor(private hotelsComponent : HotelsComponent) {
    this.checkedAll = true;

   }

  ngOnInit() {
    this.createFilterStar()
  }


  onKeyFindHotelByName() {
    this.hotelsComponent.findHotels(this.findHotelName, this.findStar);    
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
     this.hotelsComponent.findHotels(this.findHotelName, this.findStar);    
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
     this.hotelsComponent.findHotels(this.findHotelName, this.findStar);
    }else {
        console.log("Not star all checked")
    }

  }
  toggleFilterName() {
    this.showFilterName = !this.showFilterName;
  }

  toggleFilterStar() {
    this.showFilterStar = !this.showFilterStar;
  }

  
}
