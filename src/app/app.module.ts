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
    RouterModule.forRoot(routes)
  ],
  providers: [
  	ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
