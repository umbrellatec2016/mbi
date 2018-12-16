import { Component, OnInit } from '@angular/core';
import { ICampana } from 'src/app/common/interfaces/i.campana.cmp';
import { UserloginService } from 'src/app/common/services/userlogin.service';
import { IUser } from 'src/app/common/interfaces/i.user.cmp';
import {GetEmpresasCampaign} from 'src/app/common/services/s.getEmpresasCampaing.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ongestion',
  templateUrl: './ongestion.component.html',
  styleUrls: ['./ongestion.component.css']
})
export class OngestionComponent implements OnInit {
  public campaign:ICampana;
  public Campaigns:ICampana[]; /*=[{id:0,
    nombre:"Sin Datos",
    descripcion:"Sin Datos",
    id_cliente:{id:0,nombre:'sindatos',nit:'',direccion:'',telefonoa:'',telefonob:'',id_ciudad:,id_departamento:0,id_pais:0,a:0,b:0,ceo:'',habilidado:0,descripcion:'',email:'',ingresos_anuales:'',no_empleados:0,pagina_web:'',vertical:''},
    idempresa:0,
    fecha_creacion:'',
    id_usuario:'',
    tipo:''
  }];*/
  filteredOptions: Observable<any[]>;
  public User:IUser;
  selectEmpresaForm=new FormGroup({
    empresaSelect: new FormControl(),
    paisSelect:new FormControl()
  });
  
  constructor(public UserS:UserloginService, public CampaignService:GetEmpresasCampaign) { 
    //console.log(user);
    this.User=UserS.getUser()
    
  }

  ngOnInit() {
   //console.log(sessionStorage.getItem('campana'));
    this.campaign=JSON.parse(sessionStorage.getItem('campana'));
    //console.log(this.campaign)
    this.loadData();
    
    this.filteredOptions = this.selectEmpresaForm.valueChanges
      .pipe(
        startWith(''),
        //map(value => typeof value === 'string' ? value : value.nombre),
        map(value => this._filterEmpresa(value)),
        
        //map(name => name ? this._filter(name) : this.Campana.slice())
      );
   
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
    this.CampaignService.getEmpresas(this.User.id.toString(),this.campaign.id.toString())
    .subscribe(
      response=>{
        if(response.status){
          
          if(response.count>0)
          {
            this.Campaigns=response.data;
            //this.filteredOptions=this.Campaigns.
            //this.filteredOptions.
            //console.log(this.Campana);
            
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
  data(){
    console.log(this.selectEmpresaForm.get('empresaSelect').value)
  }

}
