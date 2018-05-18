import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in';
  constructor () {

    // $('body').css('backgroundColor', 'red');

    const hash = CryptoJS.MD5( 'hello world').toString();
    console.log ( hash );

  }
}
