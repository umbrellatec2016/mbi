export interface IEmpresa{
    id:number;
    nombre:string;
    nit:string;
    direccion:string;
    telefonoa:string;
    telefonob:string;
    id_ciudad:number;
    id_departamento:number;
    ceo:string;
    vertical:string;
    email:string;
    id_pais:number;
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