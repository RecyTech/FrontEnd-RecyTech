import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Product} from "../model/product.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VentasAPIService extends BaseService<Product>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/productos';
  }
}
