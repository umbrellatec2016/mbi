export interface  IPais{
    id:number;
    nombre:string;
    indicativo:number;
   

}
export interface IPaisWS{
    status: boolean;
    codeStatus:string;
    data:IPaisWS[];
    count:number;
}