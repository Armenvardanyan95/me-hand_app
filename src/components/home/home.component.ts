import { Component, OnInit } from '@angular/core';
import { Item, ItemDetails } from '../../resources/item.resource';
import { TranslateService } from 'ng2-translate';
import { ItemComponent } from '../item/item.component';
import { LoadingController } from 'ionic-angular';
import { ItemClass, ItemClassDetails } from '../../resources/item-class.resource';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  entryComponents: [ItemComponent]
})
export class HomeComponent implements OnInit {

  items: Array<ItemDetails> = [];
  lang: string;
  title: string = 'HEADER.HOME';
  loader: any;
  classes: Array<ItemClassDetails>;

  constructor(public navCtrl: NavController, private Item: Item, translate: TranslateService,
              public loadingCtrl: LoadingController, private ItemClass: ItemClass) {
    this.lang = translate.currentLang;
  }

  ngOnInit(): any {
    this.loader = this.loadingCtrl.create();
    this.loader.present();
    this.items = this.Item.query({popular: 1}, () => {
      this.loader.dismiss();
    });
    this.classes = this.ItemClass.query();
  }

  quickView(itemId: number){
    this.navCtrl.push(ItemComponent, {itemId: itemId});
  }
}
