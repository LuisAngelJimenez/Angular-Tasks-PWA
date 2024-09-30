import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    children:[
    ]
  },
  {
    path:'taskList',
            loadComponent: () => import('./features/TaskList/TaskList.component')
        
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];
