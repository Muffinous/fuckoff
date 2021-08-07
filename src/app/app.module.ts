import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { HeaderComponent } from './home/header/header.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    HomeComponent,
    HeaderComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
