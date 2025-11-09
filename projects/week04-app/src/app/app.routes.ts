import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Week04-app - Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Week04-app - about',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Week04-app - contact',
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    title: 'Week04-app - Profile',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Not-Found 404',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
