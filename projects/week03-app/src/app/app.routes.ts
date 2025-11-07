import { Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommunityComponent } from './components/community/community.component';
import { CommunityHomeComponent } from './components/community/components/community-home/community-home.component';
import { CommunityPostsComponent } from './components/community/components/community-posts/community-posts.component';
import { CommunityAboutComponent } from './components/community/components/community-about/community-about.component';
import { CommunityContactComponent } from './components/community/components/community-contact/community-contact.component';
import { PostsFeaturedComponent } from './components/community/components/community-posts/components/posts-featured/posts-featured.component';
import { PostsRecentComponent } from './components/community/components/community-posts/components/posts-recent/posts-recent.component';
import { PostsPopularComponent } from './components/community/components/community-posts/components/posts-popular/posts-popular.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsComponent } from './components/admin/components/products/products.component';
import { DashboardComponent } from './components/admin/components/dashboard/dashboard.component';
import { OrdersComponent } from './components/admin/components/orders/orders.component';
import { ListComponent } from './components/admin/components/products/components/list/list.component';
import { AddComponent } from './components/admin/components/products/components/add/add.component';
import { CategoriesComponent } from './components/admin/components/products/components/categories/categories.component';
import { PendingComponent } from './components/admin/components/orders/components/pending/pending.component';
import { CompletedComponent } from './components/admin/components/orders/components/completed/completed.component';
import { ReturnsComponent } from './components/admin/components/orders/components/returns/returns.component';

export const routes: Routes = [
    // todo 05: create a basic routing for all the components including the "emptyPaths" and the "wrongPaths❓"

    {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full',
    },
    {
        path: 'intro',
        component: IntroComponent,
        title: 'week03 - Intro',
    },

    {
        path: 'community',
        component: CommunityComponent,
        title: 'Community',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: CommunityHomeComponent,
                title: 'Community- Home',
            },
            {
                path: 'posts',
                component: CommunityPostsComponent,
                title: 'Community - Posts',
                children: [
                    {
                        path: '',
                        component: PostsFeaturedComponent,
                        title: 'Community - Featured Posts',
                    },
                    {
                        path: 'recent',
                        component: PostsRecentComponent,
                        title: 'Community - Recent Posts',
                    },
                    {
                        path: 'popular',
                        component: PostsPopularComponent,
                        title: 'Community - Popular Posts',
                    },
                ],
            },
            {
                path: 'about',
                component: CommunityAboutComponent,
                title: 'Community - about',
            },
            {
                path: 'contact',
                component: CommunityContactComponent,
                title: 'Community - contact',
            },
        ],
    },
    {
        path: 'admin',
        component: AdminComponent,
        title: 'Admin - Dashboard',
        children: [
            {
                path:"",
                redirectTo:"dashboard",
                pathMatch:"full"
            },
            {
                path:"dashboard",
                component:DashboardComponent,
                title:"Admin - Dashboard"
            },
            {
                path: 'products',
                component: ProductsComponent,
                title:"Admin - Products",
                children: [
                    {
                        path: '',
                        redirectTo: 'list',
                        pathMatch: 'full',
                    },
                    {
                        path: 'list',
                        component: ListComponent,
                        title: 'Admin - listProducts',
                    },
                    {
                        path: 'add',
                        component: AddComponent,
                        title: 'Admin - addProducts',
                    },
                    {
                        path: 'categories',
                        component: CategoriesComponent,
                        title: 'Admin - productsCategories',
                    },
                ]
            },
            {
                path:'orders',
                component:OrdersComponent,
                title:"Admin - Orders",
                children: [
                    {
                        path: '',
                        redirectTo: 'pending',
                        pathMatch: 'full',
                    },
                    {
                        path: 'pending',
                        component: PendingComponent,
                        title: 'Admin - pendingOrders',
                    },
                    {
                        path: 'completed',
                        component: CompletedComponent,
                        title: 'Admin - completedOrders',
                    },
                    {
                        path: 'returns',
                        component: ReturnsComponent,
                        title: 'Admin - returnsOrders',
                    },
                ]
            }
        ],
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Page Not Found',
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
