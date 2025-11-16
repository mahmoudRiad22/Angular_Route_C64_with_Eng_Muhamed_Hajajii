import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav-bars',
    pathMatch: 'full',
  },
  {
    path: 'nav-bars',
    loadComponent: () =>
      import('./components/core-concepts/core-concepts').then((m) => m.CoreConcepts),
    title: 'Tailwind3 - Nav-Bars',
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
