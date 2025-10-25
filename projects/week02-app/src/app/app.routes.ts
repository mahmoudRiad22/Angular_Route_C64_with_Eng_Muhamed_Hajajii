import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path:'binding',
        component:HomeComponent
    },
    {
        path:'imageHandling',
        component:ContactComponent
    }
];
