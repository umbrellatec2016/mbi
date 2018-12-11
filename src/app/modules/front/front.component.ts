import { Component, OnInit } from '@angular/core';

import { IUser } from '../../common/interfaces/i.user.cmp';
import { LoginService } from '../../common/services/s.login.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserloginService } from 'src/app/common/services/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  public User:IUser;
  //public User="asds";
  constructor(public us:UserloginService, public router:Router)
  {
     
    
   try
    {
      this.User= us.getUser();
      
      //console.log(us.getUser());
    }
    catch(e)
    {
      console.log(e);
    }
   
  }

  ngOnInit() {
  }
  iniciaCampana(){
    this.router.navigate(['front/',{ outlets: { 'content': ['gestionCampana']}}]);
  }

}
