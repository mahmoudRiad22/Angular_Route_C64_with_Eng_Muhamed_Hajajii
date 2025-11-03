import { Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ImageHandlingComponent } from './components/image-handling/image-handling.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    /**
     * //todo: wild  ✅
     * //todo: redirect for no path entry to be binding path ✅
     * //todo: path for control flow component ❌
     */
    {
        path: '',
        component: BindingComponent,
    },
    {
        path: 'binding',
        // component: BindingComponent,

        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'imageHandling',
        component: ImageHandlingComponent,
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
