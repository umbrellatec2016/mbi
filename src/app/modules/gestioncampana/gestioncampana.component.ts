import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ICampana} from '../../common/interfaces/i.campana.cmp';
import {CampaingService} from '../../common/services/s.campaing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestioncampana',
  templateUrl: './gestioncampana.component.html',
  styleUrls: ['./gestioncampana.component.css']
})
export class GestioncampanaComponent implements OnInit {

  campanaForm = new FormGroup({
  
    campana:new FormControl('',[Validators.required])
   
 });
 public Campana:ICampana[];
 filteredOptions: Observable<any[]>;
  constructor(public CampaignService:CampaingService, public router: Router) { 
    this.Campana=[{id:0,
    nombre:"Sin Seleccionar",
    descripcion:"Sin Seleccionar",
    id_cliente:'0',
    idempresa:0,
    fecha_creacion:'',
    id_usuario:'',
    tipo:''
  }]
  }

  ngOnInit() {
    this.loadData();
    console.log(this.Campana);
    this.filteredOptions = this.campanaForm.valueChanges
      .pipe(
        startWith(''),
        //map(value => typeof value === 'string' ? value : value.nombre),
        map(value => this._filter(value)),
        
        //map(name => name ? this._filter(name) : this.Campana.slice())
      );
  }
  displayFn(campana?: ICampana): string | undefined {
    //console.log(campana);
    return campana.nombre ? campana.nombre : undefined;
  }

  private _filter(nombre: any): ICampana[] {
    //console.log(nombre.campana);
   // const filterValue = nombre.campana.toString().toLowerCase();
    if(isNaN(nombre.campana))
      return this.Campana.filter(option => option.nombre.toLowerCase().includes(nombre.campana));
    else
    return this.Campana.filter(option => option.id.toString().toLowerCase().includes(nombre.campana));
  }
  
  loadData() {
    this.CampaignService.getCampaign(this.campanaForm.get('campana').value)
    .subscribe(
      response=>{
        if(response.status){
          
          if(response.count>0)
          {
            this.Campana=response.data;
            //console.log(this.Campana);
            
          }
          else
          {
           
           
          }
          
        }
        else{
          console.log("error");
         
        }
      },error=>{
       
      }
    );
  }

  //iniciar gestion
  Start(){
    //console.log(this.campanaForm.get('campana').value);
    sessionStorage.setItem('campana',JSON.stringify(this.campanaForm.get('campana').value));
    this.router.navigate(['front/',{ outlets: { 'content': ['onGestion']}}]);
  }
}
