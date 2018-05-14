import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  findHotelName = "";
  findStar = "";
  name;
  startslList = [];
  checkedAll;
  showFilterName = true;
  showFilterStar = true;
  showFilterAll = false;
  
  constructor(private mainComponent : MainComponent) {
    this.checkedAll = true;
   }

  ngOnInit() {
    this.createFilterStar()

    if (window.screen.width >= 800) { // 768px portrait
      this.showFilterAll = false;
    }
  }

  onClickFindHotelByName() {
    this.mainComponent.findHotels(this.findHotelName, this.findStar);    
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
     this.mainComponent.findHotels(this.findHotelName, this.findStar);    
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
     this.mainComponent.findHotels(this.findHotelName, this.findStar);
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

  toggleFilterAll() {
    this.showFilterAll = !this.showFilterAll;
  }  
}
