import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'produto2',
    loadChildren: () => import('./produto2/produto2.module').then( m => m.Produto2PageModule)
  },
  {
    path: 'produto3',
    loadChildren: () => import('./produto3/produto3.module').then( m => m.Produto3PageModule)
  },
  {
    path: 'produto4',
    loadChildren: () => import('./produto4/produto4.module').then( m => m.Produto4PageModule)
  },
  {
    path: 'produto5',
    loadChildren: () => import('./produto5/produto5.module').then( m => m.Produto5PageModule)
  },
  {
    path: 'produto6',
    loadChildren: () => import('./produto6/produto6.module').then( m => m.Produto6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
