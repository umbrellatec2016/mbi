import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../common/services/s.login.service';
import {IUser} from '../../common/interfaces/i.user.cmp';

import { MatSpinner } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import{RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
    public loader:boolean=true;
    public hint:boolean=false;
  //  private htt:HttpClient;
 // username= new FormControl('');
 //public Info:LoginService=new LoginService();
 public User :IUser
 
    loginForm = new FormGroup({
    username: new FormControl(),
    password:new FormControl('',[Validators.required])
   
 });
  constructor(public Info:LoginService, 
    public route: Router    ) { 
    //public Info: LoginService;
    //this.Info=new LoginService(http);
    //Info.status=true;
  }

  ngOnInit() {
  }
  loginGo(){
    //this.loginForm.get('username')
    //console.log("asd");
    //console.log();
    
   this.loader=false;
    this.Info.getLogin(this.loginForm.get('username').value,this.loginForm.get('password').value)
    .subscribe(
      response=>{
        if(response.status){
          
          if(response.count>0)
          {
            this.User=response.data;
            localStorage.setItem('currentUser', JSON.stringify(this.User));
            this.route.navigate(['front']);
            this.hint=false;
          }
          else
          {
            this.loginForm.controls['username'].setErrors({'incorrect': true});
            this.loginForm.controls['password'].setErrors({'incorrect': true});
            localStorage.removeItem('currentUser');
            this.hint=true;  
           
          }
          this.loader=true;
        }
        else{
          console.log("error");
          this.loader=true;
        }
      },error=>{
        this.loader=true;
      }
    );
  }
}
