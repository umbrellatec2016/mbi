import {IEmpresa} from './i.empresa.cmp';
export interface Icampanafiltroempresa{
    id:number;
    id_contacto:IEmpresa;
    id_campana:number;
    tela:string;
    telb:string;
    telc:string;
    estado:number;
    idusuario:number;
}
export interface ICampanafiltroempresaWS{
    status: boolean;
    codeStatus:string;
    data:Icampanafiltroempresa[];
    count:number;
}