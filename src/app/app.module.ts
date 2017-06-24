import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';

import { ShopService } from './shop.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MasonryModule
  ],
  providers: [
  	ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
