import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerItemComponent } from './beers/components/beer-item/beer-item.component';
import { BeerListComponent } from './beers/components/beer-list/beer-list.component';

const routes: Routes = [
  { path: '', component: BeerListComponent },
  { path: 'beer/:id', component: BeerItemComponent },
  { path: '**', component: BeerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
