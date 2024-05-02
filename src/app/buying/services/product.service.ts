import { Injectable } from '@angular/core';
import {ProductoService} from "../../public/services/producto.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product.entity";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ProductoService<Product> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/products'
  }
}
