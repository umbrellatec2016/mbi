import { Injectable } from '@angular/core';
import {IUserWS, IUser} from '../interfaces/i.user.cmp'
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { ICampana, ICampanaWS } from '../interfaces/i.campana.cmp';
import { IEmpresa } from '../interfaces/i.empresa.cmp';



@Injectable({
  providedIn: 'root'
})

export class GetEmpresasCampaign {
    private info:IUser;
    campaign:ICampana;
    empresa:IEmpresa;
    constructor(private httpClient: HttpClient,) { 
        this.info=JSON.parse(localStorage.getItem('currentUser'))[0];
    }
    getEmpresas(user:string,campaign:string){
        let params= new HttpParams({fromObject: {
            user_id: user,
            campaign: campaign,
            passphrase:this.info.passphrase,
            action:'getEmpresasCampaign'
          }});
        return this.httpClient.get<ICampanaWS>('https://medios.marketbi.co/api/campanas.php',{
            params:params
            });
    }

}