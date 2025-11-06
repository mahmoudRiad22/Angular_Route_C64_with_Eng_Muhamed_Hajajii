import { Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

// todo 05: create a basic routing for all the components including the "emptyPaths" and the "wrongPaths❓"

    {
        path:"intro",
        component:IntroComponent,
        title:'week03 - Intro'
    },
    {
        path:"",
        redirectTo:"intro",
        pathMatch:"full"
    },
    {
        path:"not-found",
        component:NotFoundComponent,
        title:"Page Not Found"
    },
    {
        path:"**",
        redirectTo:"not-found"
    }


];
