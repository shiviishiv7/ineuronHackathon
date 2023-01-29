import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from 'src/app/dto/Address';
import { Order } from 'src/app/dto/Order';
import { Product } from 'src/app/dto/Product';
import { Shipping } from 'src/app/dto/Shipping';
import { DeliveryService } from 'src/app/service/delivery.service';
import { AddressService } from 'src/app/services/address.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sellerorderdetails',
  templateUrl: './sellerorderdetails.component.html',
  styleUrls: ['./sellerorderdetails.component.scss']
})
export class SellerorderdetailsComponent implements OnInit {

  order:Order
  ship:Shipping = new Shipping()
  product:Product 
  weight:number = 0
  length:number = 0
  height:number = 0
  breadth:number = 0
  sub_total = 0
  userAddress:Address 

    constructor( private addressService:AddressService,private productSerivce:ProductService,private deliveryService:DeliveryService
       , private dialogRef: MatDialogRef<SellerorderdetailsComponent>,
        @Inject(MAT_DIALOG_DATA) data:Order) {
              this.order = data

    }

async    ngOnInit() {
    const res = await this.productSerivce.getProductById(this.order.productId)
    this.product = res['data']
     
        this.addressService.getAddressById(this.order.addressId)
        .subscribe(res=>{
          let address:Address = res['data']
          this.userAddress = address
          this.ship.billing_address = address.streetAddress
          this.ship.billing_city =address.townorcity
          this.ship.billing_country = address.country
          this.ship.billing_customer_name = address.firstName
          this.ship.billing_email = address.email
          this.ship.billing_phone = address.phoneno
          this.ship.billing_last_name = address.lastName
          this.ship.billing_pincode = address.postcodezip
          this.ship.billing_state = address.state
          this.ship.order_id = this.order.id
          this.ship.order_items[0].discount ="0"
          this.ship.order_items[0].hsn = ""
          this.ship.order_items[0].name = this.product.name
          this.ship.order_items[0].selling_price ="10000"
          this.ship.order_items[0].sku ="10000"
          this.ship.order_items[0].tax ="10000"
          this.ship.order_items[0].units = 10
        })


      
    }

    submit() {
      if (this.length>0 && this.breadth>0 && this.height>0 && this.weight && this.sub_total>0){

        this.ship.length = this.length
        this.ship.breadth = this.breadth
        this.ship.height = this.height
        this.ship.weight = this.weight
        this.sub_total  =  this.sub_total
        this.deliveryService.createShippingOrder(this.ship)
        .subscribe(data=>{
            alert(data['data'])
            this.dialogRef.close();
        })


      } else alert("Please fill the inpupt field") 

    }

    close() {
        this.dialogRef.close();
    }

}
