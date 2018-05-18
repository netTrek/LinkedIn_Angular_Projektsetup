import { Component } from '@angular/core';
import { User } from './user/user.enum';
import { UserType } from './user/user-type.enum';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in';
  constructor () {
    console.log ( User.User );
    console.log ( UserType.Admin );
  }
}
