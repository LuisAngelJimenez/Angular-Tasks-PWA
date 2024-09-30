import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path:'taskList',
            loadComponent: () => import('./features/TaskList/TaskList.component')
  },
  {
    path: '**',
    redirectTo: 'taskList',
  },
];
