import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer/index';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
