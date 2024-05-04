import { Component, OnInit } from '@angular/core';
import {PaymentMethod} from "../../model/payment-method.entity";
import {PaymentMethodService} from "../../services/payment-method.service";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  paymentMethods: PaymentMethod[] = [];

  constructor(private paymentMethodService: PaymentMethodService) { }

  showModal() {
    alert('Método de Pago Agregado');
  }

  ngOnInit(): void {
    this.paymentMethods = this.paymentMethodService.getAllPaymentMethods();
  }
}
