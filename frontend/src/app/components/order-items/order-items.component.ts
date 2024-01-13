import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit{

  orders:Order[]=[];
  constructor(private orderService:OrderServiceService,
              private route:ActivatedRoute)
  {

  }
  ngOnInit(): void {

    this.organizeOrders()
  }

  organizeOrders()
  {
    let result=this.route.snapshot.paramMap.has('id');
    if(result)
    {
      this.getOrdersByCategoryId();
    }
    else
    {
      this.getOrders();
    }
  }
  getOrders()
  {
    this.orderService.getOrders().subscribe(
      data=>this.orders=data
    )
  }
  getOrdersByCategoryId()
  {
     let idCategory= (this.route.snapshot.paramMap.get('id') as any);
    this.orderService.getOrdersByCategoryId(idCategory).subscribe(
      data=>this.orders=data
    )
  }
}
