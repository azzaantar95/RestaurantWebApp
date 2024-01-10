export class Category {

  id:number;
  data_update:Date;
  data_create:Date;
  name:string;


  constructor(id:number,data_update:Date,data_create:Date,name:string){


    this.id=id;

    this.data_update=data_update;
    this.data_create=data_create;
    this.name=name;
  }
}
