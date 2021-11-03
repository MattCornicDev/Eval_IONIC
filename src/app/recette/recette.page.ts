import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagemodalePage } from '../pagemodale/pagemodale.page';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {


  constructor(public modalCtrl: ModalController) {}

  async openModale()
  {
    const modal = await this.modalCtrl.create({component: PagemodalePage});
    return await modal.present();
  }
  ngOnInit() {
  }

}
