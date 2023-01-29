import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/dto/Address';

import { AddressService } from 'src/app/services/address.service';
import { CreateaddresssComponent } from '../createaddresss/createaddresss.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  id:string = ''

  addressList:Array<Address>
   constructor(private dialog: MatDialog, private route: ActivatedRoute,private addressService:AddressService,private router:Router) {}


async  ngOnInit() {
   await this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    let userId = localStorage.getItem("USER")
    if(userId!=undefined){
          let response =  JSON.parse(userId)
          this.addressService.getAddressByUserId(response.userId)
          .subscribe((data:Address[])=>{
            this.addressList =data
          })

    }
  }

  selectedAddress(address:Address){
    this.router.navigate(
      ['/order'],
      { queryParams: {userId:address.userId, productId:this.id, addressId:address.id  } }
    );
  }

  createAddress(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(CreateaddresssComponent, dialogConfig);
  }
}
