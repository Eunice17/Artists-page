import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { MetalerosComponent } from "./components/metaleros/metaleros.component";
import { MetaleroComponent } from "./components/metalero/metalero.component";
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'metaleros', component: MetalerosComponent },
    { path: 'metalero/:id', component: MetaleroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
