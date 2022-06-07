import {Roles} from "./roles";
export class User{
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    email:string;
    role:Roles;
    token?:string;
}