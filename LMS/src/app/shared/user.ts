import { Role } from './role';
export class User {
    userId: number;
    userName: string;
    accNo: number;
    password: string;
    phoneNo: number;
    emailId:string;
    accStatus: string;
    date: Date;
    roleId: number;
    role:Role;
}
