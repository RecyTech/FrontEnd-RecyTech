export class Product {
  id:string;
  name:string;
  description:string;
  category:string;
  precio:string;
  imagenUrl:string;
  created_at:Date;
  slug:string;


  constructor(id:string='',name:string='',description:string='',category:string='',precio:string='', imagenUrl:string='' ,slug:string='') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.precio = precio;
    this.imagenUrl = imagenUrl;
    this.created_at = new Date();
    this.slug = slug;
  }



}

