import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProtfolioComponent } from './components/protfolio/protfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',

        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About',
    },
    {
        path: 'portfolio',
        component: ProtfolioComponent,
        title: 'Portfolio',
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact',
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Not-Found',
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
