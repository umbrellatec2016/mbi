import {IEmpresa} from '../../common/interfaces/i.empresa.cmp';
export interface ICampana{
    id:number;
    nombre:string;
    descripcion:string;
    id_cliente:IEmpresa;
    idempresa:number;
    fecha_creacion:string;
    tipo:string;
    id_usuario:string;
}
export interface ICampanaWS{
    status: boolean;
    codeStatus:string;
    data:ICampana[];
    count:number;
}