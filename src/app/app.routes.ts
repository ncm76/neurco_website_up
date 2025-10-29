import { Routes } from '@angular/router';
import { Homepage } from '../pages/homepage/homepage';
import { Aboutpage } from '../pages/aboutpage/aboutpage';
import { Workpage } from '../pages/workpage/workpage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
  {
    path: 'home',
    component: Homepage,
  },
  {
    path: 'about',
    component: Aboutpage,
  },

  {
    path: 'work',
    component: Workpage,
  },

  { path: '**', component: Homepage }
];