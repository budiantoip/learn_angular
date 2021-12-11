import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingSourceComponent } from './routing-source/routing-source.component';
import { RoutingDestinationComponent } from './routing-destination/routing-destination.component';

const routes: Routes = [
  {
    path: 'source',
    component: RoutingSourceComponent
  },
  {
    path: 'destination',
    component: RoutingDestinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
