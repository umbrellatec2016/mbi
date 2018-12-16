export interface  IDepartamento{
    id:number;
    nombre:string;
    indicativo:number;
    idpais:number

}
export interface IDepartamentoWS{
    status: boolean;
    codeStatus:string;
    data:IDepartamento[];
    count:number;
}