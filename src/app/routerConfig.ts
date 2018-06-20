// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/book/create/create.component';
import { EditComponent } from './components/book/edit/edit.component';
import { BookIndexComponent } from './components/book/index/book.index.component';
import { HomeIndexComponent } from './components/home/index/home.index.component';
import { RestaurantIndexComponent } from './components/restaurant/index/restaurant.index.component';
import { RestaurantCreateComponent } from './components/restaurant/create/restaurant.create.component';
import { RestaurantUpdateComponent } from './components/restaurant/update/restaurant.update.component';
import { StatsPageComponent } from './components/statistics/stats-page/stats-page.component';

export const appRoutes: Routes = [
  { path: 'books/create',
    component: CreateComponent
  },
  {
    path: 'books/edit/:id',
    component: EditComponent
  },
  { path: 'books/index',
    component: BookIndexComponent
  },
  { path: '',
     component: HomeIndexComponent
  },
  { path: 'stats',
     component: StatsPageComponent
  },
  {
    path: 'restaurants/index',
     component: RestaurantIndexComponent
  },
  {
    path: 'restaurants/create',
     component: RestaurantCreateComponent
  },
  {
    path: 'restaurants/edit/:id',
     component: RestaurantUpdateComponent
  },
  {
    path: 'restaurants/delete',
     component: RestaurantIndexComponent
  }
];
