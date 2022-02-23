import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingSourceComponent } from './routing-source/routing-source.component';
import { RoutingDestinationComponent } from './routing-destination/routing-destination.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'source',
    component: RoutingSourceComponent
  },
  {
    path: 'destination',
    component: RoutingDestinationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
