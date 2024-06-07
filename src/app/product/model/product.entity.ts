export class Product {
  id:string;
  name:string;
  description:string;
  category:string;
  precio:number;
  imagenUrl:string;
  created_at:Date;
  slug:string;


  constructor(id:string='',name:string='',description:string='',category:string='',precioventa:number=0, imagenUrl:string='' ,slug:string='') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.precio = precioventa;
    this.imagenUrl = imagenUrl;
    this.created_at = new Date();
    this.slug = slug;
  }



}

