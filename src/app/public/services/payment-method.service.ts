import { Injectable } from '@angular/core';
import { PaymentMethod} from "../model/payment-method.entity";

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private paymentMethods: PaymentMethod[] = [
    new PaymentMethod('1', 'Tarjeta de crédito', 'Paga con tu tarjeta de crédito.', 'https://static.vecteezy.com/system/resources/previews/014/620/243/non_2x/credit-card-pay-device-icon-flat-style-vector.jpg'),
    new PaymentMethod('2', 'PayPal', 'Paga con PayPal.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhhFyfZL-7JBlBtwaYMq8fxeEiavlr2JCefEgCtQuNA&s'),
    new PaymentMethod('3', 'Transferencia bancaria', 'Realiza una transferencia bancaria.', 'https://www.bbva.com/wp-content/uploads/2019/11/transferencias2.jpg'),
  ];

  constructor() {}

  getAllPaymentMethods(): PaymentMethod[] {
    return this.paymentMethods;
  }

  getPaymentMethodById(id: string): PaymentMethod | undefined {
    return this.paymentMethods.find(method => method.id === id);
  }
}
