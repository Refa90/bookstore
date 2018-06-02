// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/book/create/create.component';
import { EditComponent } from './components/book/edit/edit.component';
import { BookIndexComponent } from './components/book/index/book.index.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: BookIndexComponent
  }
];
