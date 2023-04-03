import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produto6PageRoutingModule } from './produto6-routing.module';

import { Produto6Page } from './produto6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produto6PageRoutingModule
  ],
  declarations: [Produto6Page]
})
export class Produto6PageModule {}
