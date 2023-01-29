import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/dto/Order';
import { Product } from 'src/app/dto/Product';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.scss']
})
export class CreateorderComponent implements OnInit {

  constructor(private route: ActivatedRoute,private orderService:OrderService,private router:Router,private productService:ProductService) {}

  userId:string = ''
  addressId:string = ''
  productId:string = ''
  farmerId:string = ''
  price:number = 0
  name:string =''
  quantity:number = 1

  async  ngOnInit() {
     await this.route.params.subscribe(params => {
        this.userId = params['userId'];
        this.productId = params['productId'];
        this.addressId = params['addressId'];
      });
  
      this.productService.getProductById(this.productId)
        .subscribe((response:Product)=>{
          let data = response['data']
            this.farmerId = data.userId
            this.price = data['price']
            this.name = data['name']
        })

    }
  
  // this.router.navigate(
  //   ['/order'],
  //   { queryParams: {userId:address.userId, productId:this.id, addressId:address.id  } }
  // );

  submit(){

    let order = new Order()
    order.userId = this.userId
    order.addressId = this.addressId
    order.farmerId = this.farmerId
    order.amount =  this.quantity * this.price
    order.addressId = this.addressId
    order.status = "CREATED"
    order.quantity = this.quantity

this.orderService.createOrder(order)
.subscribe(data=>{
  this.router.navigateByUrl("home");
})


  }

}
