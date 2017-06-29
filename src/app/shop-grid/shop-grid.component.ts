/* Muestra el grid de restaurantes. */

import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';
import { MasonryModule } from 'angular2-masonry';
import { Router } from "@angular/router";



@Component({
	selector: 'app-shop-grid',
	templateUrl: './shop-grid.component.html',
	styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent {

	@Input() filterArray: Object;
	shopList: any;
	router: any;

	constructor( private shopService: ShopService, private _router: Router) {
		this.router = _router;
		this.filterArray = {};
		shopService.getShops(null).subscribe((data) => {
			this.shopList = data;
		});
	}

	goToDetailComponent(id) {
        this._router.navigate(['/details', id]);
    }
}
