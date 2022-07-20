import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: ':lang',
    component: MainPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: '/en/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/en/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
