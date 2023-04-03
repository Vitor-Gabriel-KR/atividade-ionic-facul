import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produto5PageRoutingModule } from './produto5-routing.module';

import { Produto5Page } from './produto5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produto5PageRoutingModule
  ],
  declarations: [Produto5Page]
})
export class Produto5PageModule {}
