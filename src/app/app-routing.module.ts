import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingSourceComponent } from './routing-source/routing-source.component';
import { RoutingDestinationComponent } from './routing-destination/routing-destination.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CallApiComponent } from './call-api/call-api.component'

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
    path: 'call-api',
    component: CallApiComponent
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
