import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Signup } from '../dto/SignUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  state:boolean=false
  signup:Signup


  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    
  }
  submit(){
    this.authService.register(this.signup)
    .subscribe(data=>{
      localStorage.setItem("AUTH",data['data']['token'])
        localStorage.setItem("USER",JSON.stringify(data['data']))
      
      if(data.hasOwnProperty("role")&&data['role']=="USER"){
        
        this.router.navigateByUrl("user")      

       }else  if(data.hasOwnProperty("role")&&data['role']=="SELLER"){
         this.router.navigateByUrl("seller")
       }else this.router.navigateByUrl("home")
    })
  }


  requestOtp(){

    this.authService.requestOtp('+91'+this.signup.number)
    .subscribe(data=>{
        this.state = true
        alert(data['message'])
    })

  }

  resendOTP(){
    this.authService.resendRegisterOTP(this.signup.number)
    .subscribe(data=>{
      alert(data['message'])
    })
  }

  rolefunction(e:any){

    this.signup.role = e.target.value
    console.log(this.signup.role)
  }
}
