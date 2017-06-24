import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ShopService {

  constructor( private http:Http) { }

	getShops() {
		return this.http.get('../assets/commerces.json')
			.map(this.extractData);
	}

	extractData(res: Response) {
		return res.json();
	}

}