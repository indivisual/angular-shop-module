import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class ShopService {

  constructor( private http:Http) { }

	getShops(id: any) {
		return this.http.get('./assets/commerces.json')
			.map(this.extractData);
	}

	extractData(res: Response) {
		return res.json();
	}

}