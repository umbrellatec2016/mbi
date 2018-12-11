import { Injectable } from '@angular/core';
import {IUserWS, IUser} from '../interfaces/i.user.cmp'
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public info:IUser;
  constructor(private httpClient: HttpClient,) { }
  getLogin(username: string, password:string) {
    //data:IUser;
    let params= new HttpParams({fromObject: {
      username: username,
      password: password,
      action:'login'
    }});
    try{
     
      this.info=JSON.parse(localStorage.getItem('currentUser'))[0];
     // console.log(this.info);
      if(this.info.hasOwnProperty('passphrase'))
      {
         params= new HttpParams({fromObject: {
          username: username,
          password: password,
          passphrase:this.info.passphrase,
          action:'login'
        }});

      }
      
      
    }
    catch(e){
      console.log(e);
    }
    
    //paramss.append('username',username);
   // paramss.append('password',password);
   return this.httpClient.get<IUserWS>('https://medios.marketbi.co/api/',{
    params:params
    });
  }
}
