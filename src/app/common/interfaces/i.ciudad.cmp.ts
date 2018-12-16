export interface ICiudad{
    id:number;
    nombre:string;
    indicativo:number;
    iddepartamento:number;
    
}
export interface ICiudadWS{
    status: boolean;
    codeStatus:string;
    data:ICiudad[];
    count:number;
}