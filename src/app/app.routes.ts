import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'volumi',
    pathMatch: 'full'
  },
  {
    path: 'volumi',
    loadComponent: () => import('./volumi/volumi.component').then(m => m.VolumiComponent)
  }
];
