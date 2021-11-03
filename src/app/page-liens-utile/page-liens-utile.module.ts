import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLiensUtilePageRoutingModule } from './page-liens-utile-routing.module';

import { PageLiensUtilePage } from './page-liens-utile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLiensUtilePageRoutingModule
  ],
  declarations: [PageLiensUtilePage]
})
export class PageLiensUtilePageModule {}
