import { Injectable } from '@angular/core';
import {IUserWS,IUser} from '../interfaces/i.user.cmp'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  public User:IUser;
  public router:Router
  constructor() { 

    try{

      this.User=JSON.parse(localStorage.getItem('currentUser'))[0];
      //console.log(User);
      
    }
    catch(e)
    {
      console.log(e);
    }
  }
  getUser()
  {
    return this.User;
  }
}
