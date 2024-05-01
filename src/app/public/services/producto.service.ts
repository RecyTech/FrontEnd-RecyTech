import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  basePath: string = "http://localhost:3000";

  constructor() {

  }
}
