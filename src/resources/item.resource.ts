import { Injectable } from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ng2-resource-rest';


export interface ItemDetails {
  url: string,
  id: number,
  hy: {
    url: string,
    id: number,
    title: string,
    description: string,
    title_lowercase: string,
    price: number
  },
  ru: {
    url: string,
    id: number,
    title: string,
    description: string,
    title_lowercase: string,
    price: number
  },
  en: {
    url: string,
    id: number,
    title: string,
    description: string,
    title_lowercase: string,
    price: number
  },
  ge: {
    url: string,
    id: number,
    title: string,
    description: string,
    title_lowercase: string,
    price: number
  },
  item_type_detail: {
    ru: string,
    hy: string,
    ge: string,
    item_class: string,
    en: string,
    id: number
  },
  item_class_detail: {
    ru: string,
    hy: string,
    step: number,
    min_size: number,
    ge: string,
    en: string,
    id: number,
    max_size: number
  },
  item_images: Array<string>,
  views: number,
  main_pic: string,
  thumbnail: string,
  collage_pic: any,
  code: number,
  discount: number,
  discount_end: string,
  promoted: boolean,
  item_type: string
}



@Injectable()
@ResourceParams({
  url: 'http://www.me-time.am/items/'
})
export class Item extends Resource{

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<any, ItemDetails[]>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod<{id: any}, ItemDetails>;

}

