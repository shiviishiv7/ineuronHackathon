import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../dto/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value:string
  min:number = 100
  max:number = 10000
 productlist:Array<Product>
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.productService.searchApi(this.value,this.min,this.max)
      .subscribe((response)=>{
          this.productlist =response['data']
      })

  }
  placeOrder(prodcut:Product){
    console.log(prodcut)

   if(localStorage.getItem("user")!=undefined)
      localStorage.getItem("user")
      this.router.navigate(['address', prodcut.id]);
  }
}
