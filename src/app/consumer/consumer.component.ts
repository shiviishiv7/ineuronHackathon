import { Component, OnInit } from '@angular/core';
import { Order } from '../dto/Order';
import { ConsumerService } from '../service/consumer.service';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  orderlist:Array<Order>
  constructor(private consumer:ConsumerService,private delivery:DeliveryService) { }

  ngOnInit(): void {

    let response = localStorage.getItem("USER")
    let data = JSON.parse(response)
    this.consumer.getAllOrderByUserIdAndStattus(data.userId)
    .subscribe((response:any)=>{
      this.orderlist =response['data']
    })
  }

  getDetails(order:Order){
    //details page

  }
  returnOrder(order:Order){
    //  this.delivery.createTurnRequest()
  }

  trackOrder(order:Order){
      this.delivery.trackingOrder(order.trackingId,order.shippmentId)
      .subscribe(data=>{

      })
  }

}
