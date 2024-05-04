import { PaymentMethod } from './payment-method.entity';

describe('PaymentMethod', () => {
  it('should create an instance', () => {
    const paymentMethod = new PaymentMethod('1', 'Tarjeta de crédito', 'Paga con tu tarjeta de crédito.', 'URL');
    expect(paymentMethod).toBeTruthy();
  });

  it('should initialize id, name, and description correctly', () => {
    const id = '1';
    const name = 'Tarjeta de crédito';
    const description = 'Paga con tu tarjeta de crédito.';
    const imagen = 'URL';
    const paymentMethod = new PaymentMethod(id, name, description, imagen);
    expect(paymentMethod.id).toEqual(id);
    expect(paymentMethod.name).toEqual(name);
    expect(paymentMethod.description).toEqual(description);
    expect(paymentMethod.imagen).toEqual(imagen);
  });
});
