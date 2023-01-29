import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from '../dto/Shipping';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  baseURL = "localhost:8082"
  constructor(private http:HttpClient) { }

  createShippingOrder(ship:Shipping):Observable<Object>{
    return this.http.post(this.baseURL+"/api/v1/public/shipment/add",ship)
  }

  trackOrder(trackingId:string):Observable<any>{
    return this.http.get(this.baseURL+"/api/v1/public/shipment/track",{params:{"orderId":trackingId}})
  }
}
