import { Injectable } from '@angular/core';
import {ICampanaWS, ICampana} from '../interfaces/i.campana.cmp'
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class CampaingService {
    
    constructor(private httpClient: HttpClient,) { }
    getCampaign(pass:string) {
        
        let params= new HttpParams({fromObject: {
            passphrase: pass,
            action:'listCampaing'
          }});
          return this.httpClient.get<ICampanaWS>('https://medios.marketbi.co/api/campanas.php',{
    params:params
    });
    }
    
  }