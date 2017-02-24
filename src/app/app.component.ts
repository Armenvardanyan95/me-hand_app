import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomeComponent } from '../components/home/home.component';
import { Page2 } from '../components/page2/page2';
import {TranslateService} from 'ng2-translate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeComponent;
  lang = 'en';
  languages: Array<{id: string, label: string, flag: string}>= [
    {
      id: 'hy',
      label: 'Հայերեն',
      flag: 'img/armenian.png'
    },
    {
      id: 'ru',
      label: 'Русский',
      flag: 'img/russian.png'
    },
    {
      id: 'en',
      label: 'English',
      flag: 'img/english.png'
    },
    {
      id: 'ge',
      label: 'Georgian',
      flag: 'img/georgian.png'
    }
  ];
  translate: any;
  pages: Array<{title: string, component: any}> = [
    { title: 'Home', component: HomeComponent },
    { title: 'Page Two', component: Page2 }
  ];


  constructor(public platform: Platform, translate: TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    this.translate = translate;
    translate.setDefaultLang('en');
    translate.use('en');

  }

  setLanguage(): void {
    this.translate.use(this.lang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
