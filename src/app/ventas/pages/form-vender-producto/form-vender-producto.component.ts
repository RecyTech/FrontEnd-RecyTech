import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VentasAPIService} from "../../services/ventas-api.service";
import {Product} from "../../model/product.entity";
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-vender-producto',
  templateUrl: './form-vender-producto.component.html',
  styleUrl: './form-vender-producto.component.css'
})
export class FormVenderProductoComponent {
  constructor(private ventasService: VentasAPIService, private router: Router) {}

  miFormulario: FormGroup = new FormGroup({
    productName: new FormControl('', Validators.required),
    producDescription: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    ProductPrecioDeVenta: new FormControl('', Validators.required),
    ProductPrecioRegular: new FormControl('', Validators.required),
    ProductImagen: new FormControl('', [Validators.required, Validators.pattern('(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)')])
  });

addProduct() {
    //this.ventasService.getAll().subscribe((productos:any)=>{console.log(productos)})
    // random id
    //let id = Math.floor(Math.random() * 1000);
    let id = Math.random().toString(36).substring(2);


    let productName=this.miFormulario.get("productName")?.value;
    let producDescription=this.miFormulario.get("producDescription")?.value;
    let productCategory=this.miFormulario.get("productCategory")?.value;
    let ProductPrecioDeVenta=this.miFormulario.get("ProductPrecioDeVenta")?.value;
    let ProductPrecioRegular=this.miFormulario.get("ProductPrecioRegular")?.value;
    let ProductImagen=this.miFormulario.get("ProductImagen")?.value;
    console.log(productName)
    const product = new Product(id,productName,producDescription,productCategory,ProductPrecioDeVenta,ProductPrecioRegular,ProductImagen);

    this.ventasService.create(product).subscribe((response) => {
      console.log('Group created successfully', response);
    });

    alert('Producto Agregado');
    this.router.navigate(['']);



  }
}
