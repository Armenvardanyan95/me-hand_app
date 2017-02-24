import { Component, Input } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: './header.html',
  selector: 'app-header',
  entryComponents: [SearchComponent]
})
export class HeaderComponent {
  @Input() title: string;
  search: string = '';
  searchBar: boolean = false;

  constructor(private navCtrl: NavController){

  }

  query(){
    this.navCtrl.push(SearchComponent, {query: this.search});
  }
}
