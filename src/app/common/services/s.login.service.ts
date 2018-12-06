import { Injectable } from '@angular/core';
import {IUserWS} from '../interfaces/i.user.cmp'
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,) { }
  getLogin(username: string, password:string) {
    //data:IUser;
    let params= new HttpParams({fromObject: {
      username: username,
      password: password,
      action:'login'
    }});
    try{
      let info=JSON.parse(localStorage.getItem('currentUser'));
      //console.log(info[0].phassphrase);
      if(info[0].phassphrase)
      {
         params= new HttpParams({fromObject: {
          username: username,
          password: password,
          phassphrase:info[0].phassphrase,
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
