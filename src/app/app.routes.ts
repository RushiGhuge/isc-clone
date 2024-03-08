import { Routes } from '@angular/router';
// import { ExploreSchoolsComponent } from './explore-schools/explore-schools.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { UniversityDetailPageComponent } from './university-details-page-componant/university-detail-page/university-detail-page.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./Home-page/explore-schools/explore-schools.component').then(m => m.ExploreSchoolsComponent) },
    { path: 'not-found', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
    { path: 'university-page/:name', loadComponent: () => import('./University_Details_Page/university-detail-page/university-detail-page.component').then(m => m.UniversityDetailPageComponent) },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
