import { Component, OnInit } from  '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item, ItemDetails } from '../../resources/item.resource';
import { ItemComponent } from '../../components/item/item.component';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';



@Component({
  selector: 'search-component',
  templateUrl: './search.html',
  entryComponents: [ItemComponent]
})
export class SearchComponent implements OnInit {
  lang: string;
  query: string;
  loader: any;
  items: Array<ItemDetails>;
  title: string = 'MENU.SEARCH';
  viewMode: string = 'cards';

  constructor(public translate: TranslateService, public loadingCtrl: LoadingController,
              private navCtrl:  NavController, public navParams: NavParams, private Item: Item){
    this.lang = translate.currentLang;
    this.query = navParams.get('query');
  }

  ngOnInit(){
    this.loader = this.loadingCtrl.create();
    this.loader.present();
    this.items = this.Item.query({search: this.query}, () => this.loader.dismiss());
  }

  quickView(itemId: number){
    this.navCtrl.push(ItemComponent, {itemId: itemId});
  }

}
