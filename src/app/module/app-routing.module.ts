import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from '../address/address/address.component';
import { ConsumerComponent } from '../consumer/consumer.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SellerComponent } from '../seller/seller.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'user',component:ConsumerComponent,pathMatch:'full'},
  {path:'seller',component:SellerComponent,pathMatch:'full'},
  { path: 'address/:id', component: AddressComponent,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
