import { Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ImageHandlingComponent } from './components/image-handling/image-handling.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HostListenerComponent } from './components/host-listener/host-listener.component';

export const routes: Routes = [
    /**
     * //todo: wild  ✅
     * //todo: redirect for no path entry to be binding path ✅
     * //todo: path for control flow component ❌
     */
    {
        path: '',
        component: BindingComponent,
        title: 'Binding',
    },
    {
        path: 'binding',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'imageHandling',
        component: ImageHandlingComponent,
        title: 'imageHandling',
    },
    {
        path:'hostListener',
        component:HostListenerComponent,
        title:"HostListener"
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'not-found',
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
