import { Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ImageHandlingComponent } from './components/image-handling/image-handling.component';

export const routes: Routes = [

    /** 
     * //todo: wild path
     * //todo: redirect for no path entry to be binding path
     * //todo: path for control flow component
     */
    {
        path:'binding',
        component:BindingComponent
    },
    {
        path:'imageHandling',
        component:ImageHandlingComponent
    }
];
