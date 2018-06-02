// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/book/create/create.component';
import { EditComponent } from './components/book/edit/edit.component';
import { BookIndexComponent } from './components/book/index/book.index.component';
import { HomeIndexComponent } from './components/home/index/home.index.component';

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
   { path: 'home/index',
     component: HomeIndexComponent
   }
];
