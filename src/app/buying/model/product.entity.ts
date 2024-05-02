export class Product {
  _id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imageUrl: string;
  precio_venta: string;
  precio_regular: string;
  created_at: string;
  slug: string;

  constructor() {
    this._id = 0;
    this.nombre = '';
    this.descripcion = '';
    this.categoria = '';
    this.imageUrl = '';
    this.precio_venta = '';
    this.precio_regular = '';
    this.created_at = '';
    this.slug = '';
  }
}
