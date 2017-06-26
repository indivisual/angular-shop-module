import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopService } from '../shop.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit, OnDestroy {

	id: string;
  	sub: any;
  	shopItem: any;
  	
  
  constructor(private route: ActivatedRoute, private shopService: ShopService, private location: Location) {
  	this.shopItem = [];
  }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];

       this.shopService.getShops(this.id).subscribe((res) => {
		  if(res.length){
		    this.shopItem = res.filter((item) => {
		      return item._id === this.id;
		    });
		  }
		});
    });
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

}
