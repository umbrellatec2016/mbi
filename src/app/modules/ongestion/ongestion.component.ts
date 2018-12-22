import { Component, OnInit } from '@angular/core';
import { ICampana } from '../../common/interfaces/i.campana.cmp';
import { UserloginService } from '../../common/services/userlogin.service';
import { IUser } from '../../common/interfaces/i.user.cmp';
import {GetEmpresasCampaign} from '../../common/services/s.getEmpresasCampaing.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { PipeTransform, Pipe } from '@angular/core';
import { IEmpresa } from '../../common/interfaces/i.empresa.cmp';
import { Icampanafiltroempresa } from '../../common/interfaces/i.campanafiltroempresa.cmp';
import { CampanaFiltroEmpresaService } from '../../common/services/s.campanafiltroempresa.service';
@Component({
  selector: 'app-ongestion',
  templateUrl: './ongestion.component.html',
  styleUrls: ['./ongestion.component.css']
})
export class OngestionComponent implements OnInit {
  public campaign:ICampana;
  public Campaigns:Icampanafiltroempresa[];
  
  public paises : Observable<any>;
  public datapaises=[];
  public datadepartament=[];
  public datacities=[];
  public current:IEmpresa={id:0,nombre:'Sin asignar',nit:'',direccion:'',telefonoa:'',telefonob:'',id_ciudad:{id:0,nombre:'',indicativo:0,iddepartamento:0},id_departamento:{id:0,nombre:'',indicativo:0,idpais:0},id_pais:{id:0,nombre:'',indicativo:0},vertical:'',email:'',no_empleados:0,ingresos_anuales:'',descripcion:'',pagina_web:'',habilidado:0,a:0,b:0};
   //this is just for example, the actual data source should be an http call or some service layer subject that you can actually update / trigger    
    //uniqueData$ = 
   
  filteredOptions: Observable<any[]>;
  public User:IUser;
  selectEmpresaForm=new FormGroup({
    empresaSelect: new FormControl(),
    paisSelect:new FormControl(),
    deparmentSelect:new FormControl(),
    ciudadSelect:new FormControl()
  });
  
  constructor(public UserS:UserloginService, public CampaignService:CampanaFiltroEmpresaService) { 
    //console.log(user);
    this.User=UserS.getUser()
    
  }

  ngOnInit() {
   //console.log(sessionStorage.getItem('campana'));
    this.campaign=JSON.parse(sessionStorage.getItem('campana'));
    //console.log(this.campaign)
    this.loadData();
    
    /*this.filteredOptions = this.selectEmpresaForm.valueChanges
      .pipe(
        startWith(''),
        //map(value => typeof value === 'string' ? value : value.nombre),
        map(value => this._filterEmpresa(value)),
        
        //map(name => name ? this._filter(name) : this.Campana.slice())
      );*/
      
   
  }
  
  _filterEmpresa(valu:string ){
    //this.Campana.filter(option => option.id.toString().toLowerCase().includes(nombre.campana));
    return this.Campaigns;
  }
  displayEmpresasFn(campana: ICampana): string | undefined {
    //console.log(campana);
    //if(campana.nombre)
      return campana.id_cliente.nombre ? campana.id_cliente.nombre : undefined;
  }
  //Carga datos a la lista de empresas seleccionadas
  loadData(){
    this.CampaignService.getCampaign(this.User.id.toString(),this.campaign.id.toString())
    .subscribe(
      response=>{
        if(response.status){
          
          if(response.count>0)
          {
            this.Campaigns=response.data;
            //let x=0;
            //let tmp=[];
            
            this.current=this.Campaigns[response.count-1].id_contacto;
            console.log(this.current);
            
            this.Campaigns.forEach(campana => {
              let x=0;
              let y=0;
              let f=0;
              //let tmp=;
              this.datapaises.forEach(data=>{
                if(data.id==campana.id_contacto.id_pais.id)
                  x++;
              });
              this.datadepartament.forEach(data=>{
                if(data.id==campana.id_contacto.id_departamento.id)
                y++;
              });
              this.datacities.forEach(data=>{
                if(data.id==campana.id_contacto.id_ciudad.id)
                f++;
              });

              //if(this.datapaises.indexOf(campana.id_cliente.id_pais.id)===-1)
              //pais
              if(x==0)
              this.datapaises.push({id:campana.id_contacto.id_pais.id,nombre:campana.id_contacto.id_pais.nombre});
              
              //department
              if(y==0)
              this.datadepartament.push({id:campana.id_contacto.id_departamento.id,nombre:campana.id_contacto.id_departamento.nombre});
              
              if(f==0)
              this.datacities.push({id:campana.id_contacto.id_ciudad.id,nombre:campana.id_contacto.id_ciudad.nombre})
              
           });
           
           

           // console.log(this.datadepartament);
           
            
          }
          else
          {
            console.log("Sin datos a seleccionar");
           
          }
          
        }
        else{
          console.log("Error de conexion");
         
        }
      },error=>{
        alert("oh my gosh");
        
      }
    );
  }
  filterPais(){
    this.datadepartament=[];
    this.Campaigns.forEach(campana => {
      let x=0;
      let y=0;
      //let tmp=;
      
      this.datadepartament.forEach(data=>{
        if(data.id==campana.id_contacto.id_departamento.id )
        y++;
      });

      //if(this.datapaises.indexOf(campana.id_cliente.id_pais.id)===-1)
      //pais
     
      
      //department
      console.log(this.selectEmpresaForm.get('paisSelect').value)
      if(y==0 && this.selectEmpresaForm.get('paisSelect').value==campana.id_contacto.id_pais.id)
      this.datadepartament.push({id:campana.id_contacto.id_departamento.id,nombre:campana.id_contacto.id_departamento.nombre});
      
      
   });
  }

}
