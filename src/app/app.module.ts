import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component'; 
import { MenuComponent } from './menu/menu.component';

import { ShopService } from './shop.service';

import { FilterPipe } from './menu/filterPipe.pipe';
import * as _ from 'lodash';

import { routes } from "./app.routes";
import { RouterModule, ActivatedRoute } from "@angular/router";

import { AgmCoreModule } from '@agm/core';
import { GMapsService } from "./gmaps.service";

@NgModule({
  declarations: [
    AppComponent,
    ShopGridComponent,
    MenuComponent,
    FilterPipe,
    ShopDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MasonryModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'})
  ],
  providers: [
  	ShopService, 
    GMapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
