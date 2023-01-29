import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 email:string = ''
 password:string = ''

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  login(){
    this.authService.login({"email":this.email,"password":this.password})
    .subscribe(data=>{
      localStorage.setItem("user",JSON.stringify(data))
       if(data.hasOwnProperty("role")&&data['role']=="USER"){
        localStorage.setItem("AUTH",data['data']['token'])
        this.router.navigateByUrl("user")        
       }else  if(data.hasOwnProperty("role")&&data['role']=="SELLER"){
        localStorage.setItem("AUTH",data['data']['token'])
         this.router.navigateByUrl("seller")
       }else this.router.navigateByUrl("home")
    })


  }


}
