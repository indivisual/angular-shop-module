import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShopService } from '../shop.service';
import { FilterPipe } from './filterPipe.pipe';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	@Output() filterSended = new EventEmitter<Object>();

	shopList: any;

  constructor( private shopService: ShopService) {

  	shopService.getShops(null).subscribe((data) => {
		this.shopList = data;
	});

  }

	filterBy( filter ): void {
		this.filterSended.emit({
			filter: filter.toLowerCase()
		});
	}

	ngOnInit(){
		this.filterBy('all');
	}

}
