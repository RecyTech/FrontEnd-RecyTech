import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Product} from "../../model/product.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-create-and-edit',
  templateUrl: './product-create-and-edit.component.html',
  styleUrl: './product-create-and-edit.component.css'
})
export class ProductCreateAndEditComponent {
  @Input() product: Product;
  @Input() editMode = false;
  @Output() productAdded = new EventEmitter<Product>();
  @Output() productUpdated = new EventEmitter<Product>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('productForm', {static: false}) productForm!: NgForm;

  constructor() {
    this.product = {} as Product;
  }

  private resetEditState() {
    this.product = {} as Product;
    this.editMode = false;
    this.productForm.resetForm();
  }

  onSubmit() {
    if (this.productForm.form.valid) {
      let emitter = this.editMode ? this.productUpdated : this.productAdded;
      emitter.emit(this.product);
      this.resetEditState();
    } else {
      console.error('Invalid data in form');
    }
  }
    onCancel() {
      this.editCanceled.emit();
      this.resetEditState();
    }
}
