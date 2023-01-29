import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../dto/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseURL = "localhost:8082"
  constructor(private http:HttpClient) { }

  getAddressByUserId(userId:string):Observable<Address[]>{
    return this.http.get<Address[]>(this.baseURL+"/api/v1/address/user/"+userId)
  }

  getAddressById(id:string):Observable<Address>{
    return this.http.get<Address>(this.baseURL+"/api/v1/address/{id}"+id)
  }


  createAddress(address:Address):Observable<Address>{
    return this.http.post<Address>(this.baseURL+"/api/v1/address/add",address)
  }


}
