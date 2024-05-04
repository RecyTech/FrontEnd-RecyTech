export class PaymentMethod {
  id: string;
  name: string;
  description: string;
  imagen:string;
  constructor(id: string, name: string, description: string, imagen: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagen = imagen;
  }
}
