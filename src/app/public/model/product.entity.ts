export class Product {
id:string;
name:string;
description:string;
category:string;
precioventa:number;
precioregular:number;
created_at:Date;
slug:string;

constructor() {
this.id = '';
this.name = '';
this.description = '';
this.category = '';
this.precioventa = 0;
this.precioregular = 0;
this.created_at = new Date();
this.slug = '';
}
}

