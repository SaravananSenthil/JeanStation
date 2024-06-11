import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  addvalidation(myform:any){
    let newlogin:User={
      username:"",
      email:myform.value.Email1,
      password:myform.value.Password1,
      role:""
    }
    if(newlogin.email=="Admin" && newlogin.password=="Admin@123"){
      this.router.navigate(['AdminHome']);
   
    }
    else{
    this.service.validateUser(newlogin.email, newlogin.password).subscribe((isValid: any) => {
      if (isValid) {
        // Login successful
        
        this.router.navigate(['UserHome'])
        // Implement your login success logic here
      } else {
        // Login failed
        //this.router.navigate(['Login'])
        this.errormessage();
        // Implement your login failure logic here
      }
    });}
  }

  errormessage(){
    alert("Invalid username or Password");
  }


}
