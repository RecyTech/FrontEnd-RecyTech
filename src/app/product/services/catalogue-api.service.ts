import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Product} from "../model/product.entity";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogueApiService extends BaseService<Product>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/productos';
  }
  getProductId(id: number){
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
