import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produto5Page } from './produto5.page';

const routes: Routes = [
  {
    path: '',
    component: Produto5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produto5PageRoutingModule {}
