import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product.entity";
import {ProductoService} from "../../services/producto.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrl: './product-info-page.component.css'
})
export class ProductInfoPageComponent implements OnInit {
  slug: string | undefined;
  product: Product |undefined;
  productSub:Subscription | undefined;

  currentImg:string | undefined;
  constructor(private route: ActivatedRoute,private productoService:ProductoService) { }
  ngOnInit() {
    this.slug=this.route.snapshot.params['id'];
    console.log(this.slug)
    this.productSub=this.productoService.getProducto()
      .subscribe({
        next:(products:Product[])=>{
          this.product=products.filter(product=>product.slug===this.slug)[0];
          this.currentImg=this.product.imagenUrl[0];
        }
      })
  }
  ngOnDestroy() {
    this.productSub?.unsubscribe();
  }
}

