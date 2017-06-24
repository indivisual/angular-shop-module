import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { MasonryModule } from 'angular2-masonry';


@Component({
	selector: 'app-shop-grid',
	templateUrl: './shop-grid.component.html',
	styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {

	shopList: any;

	constructor( private shopService: ShopService) {

		shopService.getShops().subscribe((data) => {
			this.shopList = data;
			console.log('data',data);
		});
	}

	ngOnInit() {
		
	}

}
