import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Product} from "../model/product.entity";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductoService extends BaseService<Product>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/producto';
  }

  getProducto() :Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/productos');
  }
}
