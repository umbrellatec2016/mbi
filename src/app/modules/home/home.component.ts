import { Component, OnInit } from '@angular/core';
import{RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route: Router;
  constructor(route: Router) {
    this.route=route;
   }

  ngOnInit() {
  }
  goLogin(){
    this.route.navigate(['login']);
  }
}
