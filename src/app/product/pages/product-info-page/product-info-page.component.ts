import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product.entity";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrl: './product-info-page.component.css'
})
export class ProductInfoPageComponent implements OnInit {
  slug: string | undefined;
  constructor(private route: ActivatedRoute,private productoService:ProductoService) { }
  ngOnInit() {
    this.slug= this.route.snapshot.params['id']
  }


}


