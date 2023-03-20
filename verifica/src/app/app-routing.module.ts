import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSerietvComponent } from './item-serietv/item-serietv.component';
import { SearchSerietvComponent } from './search-serietv/search-serietv.component';

const routes: Routes = [
  {path: 'search-serietv', component: SearchSerietvComponent},         
  {path: 'search-serietv/:id', component: ItemSerietvComponent}, 
  { path: '',   redirectTo: '/search-serietv', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
