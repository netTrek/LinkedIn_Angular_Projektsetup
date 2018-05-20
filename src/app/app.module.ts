import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ProductComponent } from './products/product/product.component';
import { NetTrekLibModule } from '../../projects/net-trek-lib/src/lib/net-trek-lib.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    NetTrekLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
