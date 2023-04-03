import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produto6Page } from './produto6.page';

const routes: Routes = [
  {
    path: '',
    component: Produto6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produto6PageRoutingModule {}
