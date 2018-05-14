import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { FilterComponent } from './filter/filter.component';
import { MainComponent } from './main/main.component';
import { HotelsService } from './hotels.services';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    FilterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
