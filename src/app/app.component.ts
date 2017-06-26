import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	filter: Array<Object>;
  	title = 'app';

  	constructor() {
  		this.filter = [];
  	}

  /**
   * Update messages array from event
   * @param ev
   */
  handleMessage(ev) {
    this.filter = ev;
  }
}
