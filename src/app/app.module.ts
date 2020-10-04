import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MetalerosComponent } from './components/metaleros/metaleros.component';


//Servicios
import { metalerosService } from "./metaleros.service";



//Routes
import { APP_ROUTING } from "./app.routes";
import { MetaleroComponent } from './components/metalero/metalero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MetalerosComponent,
    MetaleroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    metalerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
