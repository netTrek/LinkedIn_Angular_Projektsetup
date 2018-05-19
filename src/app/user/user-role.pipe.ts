import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log ( 'value', value );
    return value;
  }

}
