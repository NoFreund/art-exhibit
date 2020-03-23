import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PageArtListComponent } from './components/page-art-list/page-art-list.component';
import { PageArtDetailsComponent } from './components/page-art-details/page-art-details.component';
import { PageNewArtComponent } from './components/page-new-art/page-new-art.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: PageDashboardComponent
  },

  {
    path: 'art-list',
    component: PageArtListComponent
  },

  {
    path: 'art-details',
    component: PageArtDetailsComponent
  },

  {
    path: 'add',
    component: PageNewArtComponent
  },

  {
    path: 'art-details/:name',
    component: PageArtDetailsComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
