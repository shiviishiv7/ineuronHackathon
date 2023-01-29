import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './module/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address/address.component';
import { ProductComponent } from './product/product/product.component';
import { OrderComponent } from './order/order/order.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CreateaddresssComponent } from './address/createaddresss/createaddresss.component';
import { UpdateaddressComponent } from './address/updateaddress/updateaddress.component';
import { ReadaddressComponent } from './address/readaddress/readaddress.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { CreateorderComponent } from './order/createorder/createorder.component';
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerorderdetailsComponent } from './seller/sellerorderdetails/sellerorderdetails.component';
// import { MaterialModule } from './material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { TokenInterceptor } from './TokenInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddressComponent,
    ProductComponent,
    OrderComponent,
  
    ConsumerComponent,
    CreateaddresssComponent,
    UpdateaddressComponent,
    ReadaddressComponent,
    CreateproductComponent,
    UpdateproductComponent,
    CreateorderComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailsComponent,
    SellerorderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
    // MaterialModule,

  ],
  providers: [  
    {  
      provide: HTTP_INTERCEPTORS,  
      useClass: TokenInterceptor,  
      multi: true  
    }  
  ]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
