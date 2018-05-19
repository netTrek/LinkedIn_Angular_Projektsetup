import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTypeDirective } from './user-type.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserTypeDirective],
  exports: [UserComponent, UserListComponent, UserTypeDirective]
})
export class UserModule { }
