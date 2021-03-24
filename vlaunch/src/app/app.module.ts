import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormatPricePipe } from './core/pipes';
import { AuthModule } from './modules/auth/auth.module';
import { MaterialModule } from './modules/vlaunch/material.module';
import { VlaunchModule } from './modules/vlaunch/vlaunch.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AlertComponent,
    FormatPricePipe,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
