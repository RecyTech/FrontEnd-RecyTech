import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../model/product.entity"
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
productData:Product;
dataSource!: MatTableDataSource<any>;
displayedColumns: string[] = ['id', 'name', 'description', 'category'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;


constructor(){
this.productData = {} as Product;
}
}
