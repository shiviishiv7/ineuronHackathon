import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()  
export class TokenInterceptor implements HttpInterceptor {  
  
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
      
    request = request.clone({  
      setHeaders: {  
        Authorization: `Bearer ${localStorage.getItem("AUTH")}`  
      }  
    });    return next.handle(request);  
  }  
}  