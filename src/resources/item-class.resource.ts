import { Injectable } from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ng2-resource-rest';

export interface ItemClassDetails {
  url: string,
  id: number,
  hy: string,
  ru: string,
  en: string,
  ge: string,
  min_size: number,
  max_size: number,
  step: number
}

@Injectable()
@ResourceParams({
  url: 'http://www.me-time.am/itemclass/'
})
export class ItemClass extends Resource{

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<any, ItemClassDetails[]>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod<{id: any}, ItemClassDetails>;

}
