import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminHaberlerComponent } from './admin/admin-haberler/admin-haberler.component';
import { AdminDuyurularComponent } from './admin/admin-duyurular/admin-duyurular.component';

import { HomeComponent } from './home/home.component';
import { HomeHaberlerComponent } from './home/home-haberler/home-haberler.component';
import { HomeDuyurularComponent } from './home/home-duyurular/home-duyurular.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'haberler', component: AdminHaberlerComponent },
      { path: 'duyurular', component: AdminDuyurularComponent },
      { path: '', redirectTo: 'haberler', pathMatch: 'full' }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'haberler', component: HomeHaberlerComponent },
      { path: 'duyurular', component: HomeDuyurularComponent },
      { path: '', redirectTo: 'haberler', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home/haberler', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home/haberler', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
