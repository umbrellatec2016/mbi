export interface IUser{
    username:string;
    passphrase:string;
    name:string;
    id:number;
    lastlogin:string;
}
export interface IUserWS{
    status: boolean;
    codeStatus:string;
    data:IUser;
    count:number;
}