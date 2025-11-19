import { Routes } from '@angular/router';

export const routes: Routes = [
  // todo 05: create a basic routing for all the components including the "emptyPaths" and the "wrongPaths❓"

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () => import('./components/intro/intro.component').then((m) => m.IntroComponent),
    title: 'week03 - Intro',
  },

  {
    path: 'community',
    loadComponent: () =>
      import('./components/community/community.component').then((m) => m.CommunityComponent),
    title: 'Community',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/community/components/community-home/community-home.component').then(
            (m) => m.CommunityHomeComponent
          ),
        title: 'Community- Home',
      },
      {
        path: 'posts',
        loadComponent: () =>
          import(
            './components/community/components/community-posts/community-posts.component'
          ).then((m) => m.CommunityPostsComponent),
        title: 'Community - Posts',
        children: [
          {
            path: '',
            redirectTo: 'recent',
            pathMatch: 'full',
          },
          {
            path: 'recent',
            loadComponent: () =>
              import(
                './components/community/components/community-posts/components/posts-recent/posts-recent.component'
              ).then((m) => m.PostsRecentComponent),
            title: 'Community - Recent Posts',
          },
          {
            path: 'featured',
            loadComponent: () =>
              import(
                './components/community/components/community-posts/components/posts-featured/posts-featured.component'
              ).then((m) => m.PostsFeaturedComponent),
            title: 'Community - Featured Posts',
          },

          {
            path: 'popular',
            loadComponent: () =>
              import(
                './components/community/components/community-posts/components/posts-popular/posts-popular.component'
              ).then((m) => m.PostsPopularComponent),
            title: 'Community - Popular Posts',
          },
        ],
      },
      {
        path: 'about',
        loadComponent: () =>
          import(
            './components/community/components/community-about/community-about.component'
          ).then((m) => m.CommunityAboutComponent),
        title: 'Community - about',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import(
            './components/community/components/community-contact/community-contact.component'
          ).then((m) => m.CommunityContactComponent),
        title: 'Community - contact',
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin.component').then((m) => m.AdminComponent),
    title: 'Admin - Dashboard',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/admin/components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        title: 'Admin - Dashboard',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./components/admin/components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        title: 'Admin - Products',
        children: [
          {
            path: '',
            redirectTo: 'add',
            pathMatch: 'full',
          },
          {
            path: 'list',
            loadComponent: () =>
              import('./components/admin/components/products/components/list/list.component').then(
                (m) => m.ListComponent
              ),
            title: 'Admin - listProducts',
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./components/admin/components/products/components/add/add.component').then(
                (m) => m.AddComponent
              ),
            title: 'Admin - addProducts',
          },
          {
            path: 'categories',
            loadComponent: () =>
              import(
                './components/admin/components/products/components/categories/categories.component'
              ).then((m) => m.CategoriesComponent),
            title: 'Admin - productsCategories',
          },
        ],
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./components/admin/components/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
        title: 'Admin - Orders',
        children: [
          {
            path: '',
            redirectTo: 'pending',
            pathMatch: 'full',
          },
          {
            path: 'pending',
            loadComponent: () =>
              import(
                './components/admin/components/orders/components/pending/pending.component'
              ).then((m) => m.PendingComponent),
            title: 'Admin - pendingOrders',
          },
          {
            path: 'completed',
            loadComponent: () =>
              import(
                './components/admin/components/orders/components/completed/completed.component'
              ).then((m) => m.CompletedComponent),
            title: 'Admin - completedOrders',
          },
          {
            path: 'returns',
            loadComponent: () =>
              import(
                './components/admin/components/orders/components/returns/returns.component'
              ).then((m) => m.ReturnsComponent),
            title: 'Admin - returnsOrders',
          },
        ],
      },
    ],
  },
  {
    path: 'transferData',
    loadComponent: () =>
      import('./components/transfer-data/transfer-data.component').then(
        (m) => m.TransferDataComponent
      ),
    title: 'Transfer Data',
  },
  {
    path: 'university',
    loadComponent: () => {
      return import('./components/university/university.component').then((m) => {
        return m.UniversityComponent;
      });
    },
    title: 'University',
    children: [
      {
        path: '',
        redirectTo: 'engineering',
        pathMatch: 'full',
      },
      {
        path: 'engineering',
        loadComponent: () =>
          import('./components/university/components/engineering/engineering.component').then(
            (m) => m.EngineeringComponent
          ),
        title: 'University - Engineering',
        children: [
          {
            path:"",
            redirectTo:"computer-science",
            pathMatch:"full"
          },
          {
            path: 'computer-science',
            loadComponent: () =>
              import(
                './components/university/components/engineering/components/computer-science/computer-science.component'
              ).then((m) => m.ComputerScienceComponent),
            title: 'University - Computer Science',
            children: [
              {
                path:"",
                redirectTo:'year-1',
                pathMatch:"full"
              },
              {
                path: 'year-1',
                loadComponent: () =>
                  import(
                    './components/university/components/engineering/components/computer-science/components/year-1/year-1.component'
                  ).then((m) => m.Year1Component),
                title: 'Computer Science - Year-1',
              },
              {
                path: 'year-2',
                loadComponent: () =>
                  import(
                    './components/university/components/engineering/components/computer-science/components/year-2/year-2.component'
                  ).then((m) => m.Year2Component),
                title: 'Computer Science - Year-2',
              },
              {
                path: 'year-3',
                loadComponent: () =>
                  import(
                    './components/university/components/engineering/components/computer-science/components/year-3/year-3.component'
                  ).then((m) => m.Year3Component),
                title: 'Computer Science - Year-3',
              },
            ],
          },
          {
            path: 'mechanical',
            loadComponent: () =>
              import(
                './components/university/components/engineering/components/mechanical/mechanical.component'
              ).then((m) => m.MechanicalComponent),
            title: 'University - Mechanical',
            children: [
              {
                path: 'year-1',
                loadComponent: () =>
                  import(
                    './components/university/components/engineering/components/mechanical/components/year-1/year-1.component'
                  ).then((m) => m.Year1Component),
                title: 'Mechanical - Year-1',
              },
              {
                path: 'year-2',
                loadComponent: () =>
                  import(
                    './components/university/components/engineering/components/mechanical/components/year-2/year-2.component'
                  ).then((m) => m.Year2Component),
                title: 'Mechanical - Year-2',
              },
            ],
          },
        ],
      },
      {
        path: 'business',
        loadComponent: () =>
          import('./components/university/components/business/business.component').then(
            (m) => m.BusinessComponent
          ),
        title: 'University - business',
        children: [
          {
            path: '',
            redirectTo: 'finance',
            pathMatch: 'full',
          },
          {
            path: 'finance',
            loadComponent: () =>
              import(
                './components/university/components/business/components/finance/fincance.component'
              ).then((m) => m.FincanceComponent),
            title: 'Business - Finance',
            children: [
              {
                path: 'undergrad',
                loadComponent: () =>
                  import(
                    './components/university/components/business/components/finance/components/undergrad/undergrad.component'
                  ).then((m) => m.UndergradComponent),
                title: 'Finance - Undergrad',
              },
              {
                path: 'masters',
                loadComponent: () =>
                  import(
                    './components/university/components/business/components/finance/components/masters/masters.component'
                  ).then((m) => m.MastersComponent),
                title: 'Finance - masters',
              },
              {
                path: '**',
                redirectTo: 'not-found',
              },
            ],
          },
          {
            path: 'marketing',
            loadComponent: () =>
              import(
                './components/university/components/business/components/marketing/marketing.component'
              ).then((m) => m.MarketingComponent),
            title: 'Business - Marketing',
          },
          {
            path: '**',
            redirectTo: 'not-found',
          },
        ],
      },
      {
        path: 'faculty',
        loadComponent: () =>
          import('./components/university/components/faculty/faculty.component').then(
            (m) => m.FacultyComponent
          ),
        title: 'University - faculty',
      },
      {
        path: 'profiles',
        loadComponent: () =>
          import('./components/university/components/profiles/profiles.component').then(
            (m) => m.ProfilesComponent
          ),
        title: 'University - profiles',
      },
      {
        path: 'schedules',
        loadComponent: () =>
          import('./components/university/components/schedules/schedules.component').then(
            (m) => m.SchedulesComponent
          ),
        title: 'University - schedules',
      },
      {
        path: '**',
        redirectTo: 'not-found',
      },
    ],
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
