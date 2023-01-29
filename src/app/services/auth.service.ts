import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../dto/Login';
import { Signup } from '../dto/SignUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "localhost:8082"


  constructor(private http:HttpClient) { }


  login(obj:Login):Observable<Object>{
   return this.http.post(this.baseURL+"/api/v1/public/auth/token",obj)
  }

  requestOtp(number:string):Observable<Object>{
    return this.http.post(this.baseURL+"/api/v1/public/auth/register-send-otp",{"number":number})
  }

  register(signup:Signup):Observable<Object>{
    return this.http.post(this.baseURL+"/api/v1/public/auth/register-verify-otp",signup)
  }
  resendRegisterOTP(number:string){
      return this.http.post(this.baseURL+"/api/v1/public/auth/register-resend-otp",{"number":number})
  }
}
