import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTypeDirective } from './user-type.directive';
import { UserRolePipe } from './user-role.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserTypeDirective, UserRolePipe],
  exports: [UserComponent, UserListComponent, UserTypeDirective, UserRolePipe]
})
export class UserModule { }
