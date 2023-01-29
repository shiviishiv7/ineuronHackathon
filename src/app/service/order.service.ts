import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../dto/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL = "http://localhost:8082"
  constructor(private http:HttpClient) { }


  createOrder(order:Order):Observable<Object>{
    return this.http.post(this.baseURL+"/api/v1/order/add",order)
 }
}
