import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { FilterComponent } from './filter/filter.component';
import { HotelsComponent } from './hotels/hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    FilterComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
