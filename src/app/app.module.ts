import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ResourceModule } from 'ng2-resource-rest';
import { MyApp } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { HeaderComponent } from '../components/header/header.component';
import { ItemComponent } from '../components/item/item.component';
import { Page2 } from '../components/page2/page2';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    HeaderComponent,
    ItemComponent,
    SearchComponent,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ResourceModule.forRoot(),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/languages', '.json'),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    ItemComponent,
    SearchComponent,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
