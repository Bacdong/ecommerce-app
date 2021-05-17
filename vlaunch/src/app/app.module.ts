import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './modules/auth/auth.module';
import { MaterialModule } from './modules/vlaunch/material.module';
import { VlaunchModule } from './modules/vlaunch/vlaunch.module';
import {StripeModule} from 'stripe-angular';
import {NgxStripeModule} from 'ngx-stripe';
import { ProductNotFoundComponent } from './components/product-not-found/product-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AlertComponent,
    ProductNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    VlaunchModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
  NgxStripeModule.forRoot('pk_test_51Hds9CDa9Wt0jMavaIgUpFqwPCcVq50HmzBk5j2maKvaiGnoaZXNxee668jIGqdEmSETbBgokFc84Sk4fWYvLZqQ00PQk8i2eK')
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
