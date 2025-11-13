import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [
  
  {
    path: 'core-concept',
    loadComponent: () =>
      import('./components/core-concepts/core-concepts').then((m) => m.CoreConcepts),
    title: 'Tailwind3 - Core Concept',
  },
];
