import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Address } from 'src/app/dto/Address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-createaddresss',
  templateUrl: './createaddresss.component.html',
  styleUrls: ['./createaddresss.component.scss']
})
export class CreateaddresssComponent implements OnInit {

  address:Address =new Address()

  constructor(private addressService:AddressService, private dialogRef: MatDialogRef<CreateaddresssComponent>,) { }

  ngOnInit(): void {

    let user = localStorage.getItem("USER")
    this.address.userId = JSON.parse(user).userId
  }

  sumbit(){

    this.addressService.createAddress(this.address)
    .subscribe(data=>{
        this.dialogRef.close(data['data']);
    })


  }

}
