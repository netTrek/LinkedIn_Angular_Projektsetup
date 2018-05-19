import { Directive } from '@angular/core';

@Directive({
  selector: '[inUserType]'
})
export class UserTypeDirective {

  constructor() {
    console.log ( 'hello world' );
  }

}
