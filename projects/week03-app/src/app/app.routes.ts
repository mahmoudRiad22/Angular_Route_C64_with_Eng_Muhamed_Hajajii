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

        children:[
            {
                path:"",
                component:CommunityHomeComponent,
                title:"Community- Home"
            },
            
            {
                path:"posts",
                component:CommunityPostsComponent,
                title:"Community - Posts",
                children:[
                    {
                        path:"",
                        component:PostsFeaturedComponent,
                        title:"Community - Featured Posts"
                    },
                    {
                        path:"recent",
                        component:PostsRecentComponent,
                        title:"Community - Recent Posts"
                    },
                    {
                        path:"popular",
                        component:PostsPopularComponent,
                        title:"Community - Popular Posts"
                    }
                ]
            },
            {
                path:"about",
                component:CommunityAboutComponent,
                title:"Community - about"
            },
            {
                path:"contact",
                component:CommunityContactComponent,
                title:"Community - contact"
            }
        ]
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Page Not Found',
    },
    {
        path: '**',
        redirectTo: 'not-found',
    }
];
