export class Order {

  id:number;
  data_update:Date;
  data_create:Date;
  name:string;
  description:string;
  image:string;
  price:number;


constructor(id:number,data_update:Date,data_create:Date,name:string,description:string,image:string,price:number){
  this.id=id;
  this.data_update=data_update;
  this.data_create=data_create;
  this.name=name;
  this.description=description;
  this.image=image;
  this.price=price;
}

}
