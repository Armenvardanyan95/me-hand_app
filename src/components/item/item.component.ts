import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item, ItemDetails } from '../../resources/item.resource';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'item-component',
  templateUrl: './item.html'
})
export class ItemComponent implements OnInit {
  itemId: number;
  item: any;
  loader: any;
  lang: string;
  title: string;
  viewSlides: boolean = false;
  numbers: Array<number> = [];
  sizeRanges: Array<number>;

  constructor(public navParams: NavParams, translate: TranslateService,
              public loadingCtrl: LoadingController, private Item: Item, private storage: Storage){
    this.itemId = navParams.get('itemId');
    this.lang = translate.currentLang;
    for(let i = 1; i < 21; i++){
      this.numbers.push(i);
    }
  }

  ngOnInit(){
    this.loader = this.loadingCtrl.create();
    this.loader.present();
    this.item = this.Item.get({id: this.itemId}, () => {
      this.loader.dismiss();
      this.title = this.item[this.lang].title;
      this.item.quantity = 1;
      this.sizeRanges = this.sizeRange(this.item.item_class_detail.min_size, this.item.item_class_detail.max_size,
        this.item.item_class_detail.step);
    });
  }

  sizeRange(min: number, max: number, step: number): Array<number> {
    let range: Array<number> = [];
    for (let i = min; i <= max; i += step) {
      range.push(i);
    }
    return range;
  }


}
