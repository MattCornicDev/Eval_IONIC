import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-pagemodale',
  templateUrl: './pagemodale.page.html',
  styleUrls: ['./pagemodale.page.scss'],
})
export class PagemodalePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async closeModal()
  {
    await this.modalCtrl.dismiss();
  }

}
