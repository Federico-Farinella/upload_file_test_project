import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'volumi',
    pathMatch: 'full'
  },
  {
    path: 'volumi',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashBoardComponent)
  }
];
