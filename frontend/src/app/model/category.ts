export class Category {

  id:number;
  logo:string;
  data_update:Date;
  data_create:Date;
  name:string;


  constructor(id:number,data_update:Date,data_create:Date,name:string,logo:string){


    this.id=id;
    this.logo=logo;
    this.data_update=data_update;
    this.data_create=data_create;
    this.name=name;
  }
}
