import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MetalerosComponent } from './components/metaleros/metaleros.component';
//Servicios
import { metalerosService } from "./metaleros.service";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//Routes
import { APP_ROUTING } from "./app.routes";
import { MetaleroComponent } from './components/metalero/metalero.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MetalerosComponent,
    MetaleroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    APP_ROUTING,
  ],
  providers: [
    metalerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
