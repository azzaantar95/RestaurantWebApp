export class Order {

  id:number;
  data_update:Date;
  data_create:Date;
  name:string;
  description:string;
  img:string;
  price:number;


constructor(id:number,data_update:Date,data_create:Date,name:string,description:string,img:string,price:number){
  this.id=id;
  this.data_update=data_update;
  this.data_create=data_create;
  this.name=name;
  this.description=description;
  this.img=img;
  this.price=price;
}

}
