export class Product {
  id:string;
  name:string;
  description:string;
  category:string;
  precioventa:number;
  precioregular:number;
  imagenUrl:string;
  created_at:Date;
  slug:string;


  constructor(id:string='',name:string='',description:string='',category:string='',precioventa:number=0,precioregular:number=0, imagenUrl:string='' ,slug:string='') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.precioventa = precioventa;
    this.precioregular = precioregular;
    this.imagenUrl = imagenUrl;
    this.created_at = new Date();
    this.slug = slug;
  }



}

