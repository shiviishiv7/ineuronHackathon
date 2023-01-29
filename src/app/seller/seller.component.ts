import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Order } from '../dto/Order';
import { SellerService } from '../services/seller.service';
import { SellerorderdetailsComponent } from './sellerorderdetails/sellerorderdetails.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  orderlist:Array<Order>
  constructor(private sellerService:SellerService,private dialog: MatDialog) { }

  ngOnInit(): void {

    let response = localStorage.getItem("USER")
    let data = JSON.parse(response)
    this.sellerService.getOrderForFarmer(data.userId)
    .subscribe((response:any)=>{
      this.orderlist =response['data']
    })
  }
  

  getDetails(order:Order){
    //details page

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = order

    this.dialog.open(SellerorderdetailsComponent, dialogConfig);


  }

}
