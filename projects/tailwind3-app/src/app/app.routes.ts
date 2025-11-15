import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'coreConcepts',
    pathMatch: 'full',
  },
  {
    path: 'coreConcepts',
    loadComponent: () =>
      import('./components/core-concepts/core-concepts').then((m) => m.CoreConcepts),
    title: 'Tailwind3 - Core Concept',
  },
  {
    path: 'not-found',
    loadComponent: () => {
      return import('./components/not-found/not-found').then((m) => {
        return m.NotFound;
      });
    },
    title: 'Tailwind3 - 404-Page Not Found!',
  },
  {
    path:"**",
    redirectTo:"not-found",

  }
];
