import { ApplicationConfig } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { MobileComponent } from './components/all-products/components/mobile/mobile.component';
import { TabletComponent } from './components/all-products/components/tablet/tablet.component';
import { LaptopComponent } from './components/all-products/components/laptop/laptop.component';
import { TvComponent } from './components/all-products/components/tv/tv.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full' //* prefix by default
  },
  {
    path: 'home',
    component: HomeComponent,
    title:"home page"
  },
  {
    path: 'features',
    component: FeaturesComponent,
        title:"features page"

  },
  {
    path: 'contact',
    component: ContactComponent,
        title:"contact page"
  },

  {
    path:'not-found',
    component:NotFoundComponent,
        title:"Not-Found"
  },

  {
    path:'test',
    redirectTo:'allProducts',
    pathMatch:'prefix'
  },

  {
    path:'allProducts',
    component:AllProductsComponent,
    title:'all-products',
    children:[
      {
        path:'',
        redirectTo:'allProducts',
        pathMatch:'full'
      },
      {
        path:'mobile',
        component:MobileComponent
      },
      {
        path:'table',
        component:TabletComponent
      },
      {
        path:'laptop',
        component:LaptopComponent
      },
      {
        path:'tv',
        component:TvComponent
      }
    ]

  },
  
    {
    path:'**',
    redirectTo:'not-found'
  },



];
