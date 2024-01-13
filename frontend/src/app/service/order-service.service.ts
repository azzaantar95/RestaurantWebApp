import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  // to get all orders from the database
  getOrders():Observable<Order[]>{

    return this.http.get<Order[]>(`${this.baseUrl}allOrders`).pipe(map(Response=>Response))
  }

  // to get all orders based on specific id

  getOrdersByCategoryId(id:number):Observable<Order[]>{

    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}`).pipe(map(Response=>Response))
  }
}
