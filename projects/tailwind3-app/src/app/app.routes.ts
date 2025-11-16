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
      import('./components//nav-bars/nav-bars').then((m) => m.NavBars),
    title: 'Tailwind3 - Nav-Bars',
  },
  {
    path:"flexBox-grid",
    loadComponent:() => {
      return import('./components/flexbox-grid/flexbox-grid').then((m) => {
        return m.FlexboxGrid
      })
    }
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
