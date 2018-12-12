import { Component, OnInit } from '@angular/core';
import { ICampana } from 'src/app/common/interfaces/i.campana.cmp';
import { UserloginService } from 'src/app/common/services/userlogin.service';
import { IUser } from 'src/app/common/interfaces/i.user.cmp';

@Component({
  selector: 'app-ongestion',
  templateUrl: './ongestion.component.html',
  styleUrls: ['./ongestion.component.css']
})
export class OngestionComponent implements OnInit {
  public campaign:ICampana;
  public User:IUser;
  constructor(public UserS:UserloginService) { 
    //console.log(user);
    this.User=UserS.getUser()
  }

  ngOnInit() {
   //console.log(sessionStorage.getItem('campana'));
    this.campaign=JSON.parse(sessionStorage.getItem('campana'));
    console.log(this.campaign)
   
  }

}
