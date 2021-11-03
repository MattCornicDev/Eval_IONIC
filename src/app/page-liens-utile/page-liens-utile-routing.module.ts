import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLiensUtilePage } from './page-liens-utile.page';

const routes: Routes = [
  {
    path: '',
    component: PageLiensUtilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLiensUtilePageRoutingModule {}
