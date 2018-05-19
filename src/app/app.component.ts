import { Component } from '@angular/core';
import { UserLoginService } from './user/user-login.service';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in';
  constructor ( userLogin: UserLoginService ) {
    console.log ( userLogin );
  }
}
