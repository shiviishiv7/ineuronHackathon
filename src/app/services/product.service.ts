import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../dto/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "localhost:8082"
  
  constructor(private http:HttpClient) { }


  searchApi(value:string,min:number,max:number):Observable<Product[]>{
    let obj = {}
    if(value!=undefined && value!=null && value.length>2){
      obj['value']=value
    }
    if(min>10) obj['min']=min
    if(max<11000) obj['max']=max
    return this.http.get<Product[]>("http://localhost:8082/api/v1/public/product/search",{params:obj})
  }

  getProductById(userId:string):Observable<Product>{
    return this.http.get<Product>(this.baseURL+"/api/v1/public/product/"+userId)

  }

}
