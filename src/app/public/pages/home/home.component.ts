import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../ventas/model/product.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {VentasAPIService} from "../../../ventas/services/ventas-api.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  productData: Product;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['_id','nombre', 'descripcion', 'categoria', 'imagenUrl', 'precio_venta', 'precio_regular', 'created_at', 'slug'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;

  constructor(private ventasService: VentasAPIService) {
    this.isEditMode = false;
    this.productData = {} as Product;
    this.dataSource = new MatTableDataSource<any>();
  }

  private resetEditState(): void {
    this.isEditMode = false;
    this.productData = {} as Product;
  }

  private getAllProducts() {
    this.ventasService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  };

  private createProduct() {
    this.ventasService.create(this.productData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((product: Product) => {return product;});
    });
  };

  private updateProduct() {
    let productToUpdate = this.productData;
    this.ventasService.update(this.productData.id, productToUpdate).subscribe((response:any)=> {
      this.dataSource.data = this.dataSource.data.map((product:Product) => {
        if (product.id === response.id){
          return response;
        }
        return product;
      });
    });
  };

  private deleteProduct(productId: string) {
    this.ventasService.delete(productId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((product: Product) => {
        return product.id !== productId ? product : false;
      });
    });
  };

  onDeleteItem(element: Product) {
    this.deleteProduct(element.id);
  }

  onCancelEdit() {
    this.resetEditState();
    this.getAllProducts();
  }

  onProductAdded(element: Product) {
    this.productData = element;
    this.createProduct();
    this.resetEditState();
  }

  onProductUpdated(element: Product) {
    this.productData = element;
    this.updateProduct();
    this.resetEditState();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

}
