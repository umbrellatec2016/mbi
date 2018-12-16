import { ICiudad } from "./i.ciudad.cmp";
import { IDepartamento } from "./i.departamento.cmp";
import { IPais } from "./i.pais.cmp";

export interface IEmpresa{
    id:number;
    nombre:string;
    nit:string;
    direccion:string;
    telefonoa:string;
    telefonob:string;
    id_ciudad:ICiudad;
    id_departamento:IDepartamento
    vertical:string;
    email:string;
    id_pais:IPais;
    no_empleados:number;
    ingresos_anuales:string;
    descripcion:string;
    pagina_web:string;
    habilidado:number;
    b:number;
    a:number;
}
export interface EmpresaWS{
    status: boolean;
    codeStatus:string;
    data:IEmpresa;
    count:number;
}