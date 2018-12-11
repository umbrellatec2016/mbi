import { Component, OnInit } from '@angular/core';
import { ICampana } from 'src/app/common/interfaces/i.campana.cmp';

@Component({
  selector: 'app-ongestion',
  templateUrl: './ongestion.component.html',
  styleUrls: ['./ongestion.component.css']
})
export class OngestionComponent implements OnInit {
  public campaign:ICampana;
  constructor() { }

  ngOnInit() {
   //console.log(sessionStorage.getItem('campana'));
    this.campaign=JSON.parse(sessionStorage.getItem('campana'));
   
  }

}
