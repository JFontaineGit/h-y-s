import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./leyes/leyes.component').then(m => m.LeyesSeguridadComponent),
    }
];
