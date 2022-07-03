import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarTogglerComponent } from './components/header/navbar-toggler/navbar-toggler.component';
import { NavbarOffcanvasComponent } from './components/header/navbar-offcanvas/navbar-offcanvas.component';
import { BannerComponent } from './components/header/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarTogglerComponent,
    NavbarOffcanvasComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
