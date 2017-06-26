import { Routes } from "@angular/router";
import { ShopDetailsComponent } from './shop-details/shop-details.component';

export const routes: Routes = [
	{
		path: "details/:id",
		component: ShopDetailsComponent
	}
]