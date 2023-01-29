import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseURL = "http://localhost:8082"

  constructor(private http:HttpClient) { }

  getOrderForFarmer(userId:string):Observable<Object>{
    return this.http.get(this.baseURL+"/api/v1/order/user/seller/"+userId)
  }
}
