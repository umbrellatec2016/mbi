import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { ICampanafiltroempresaWS } from '../interfaces/i.campanafiltroempresa.cmp';
import { IUser } from '../interfaces/i.user.cmp';

@Injectable({
    providedIn: 'root'
  })
  export class CampanaFiltroEmpresaService {
    private info:IUser;
    constructor(private httpClient: HttpClient,) { 
        this.info=JSON.parse(localStorage.getItem('currentUser'))[0];
    }
    getCampaign(user:string,campaign:string) {
        
        let params= new HttpParams({fromObject: {
            user_id: user,
            campaign: campaign,
            passphrase:this.info.passphrase,
            action:'getEmpresasCampaign'
          }});
          return this.httpClient.get<ICampanafiltroempresaWS>('https://medios.marketbi.co/api/campanas.php',{
    params:params
    });
    }
    
  }