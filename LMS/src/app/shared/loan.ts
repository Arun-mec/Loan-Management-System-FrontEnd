import { User } from "./user";

export class Loan {
    loanId: number;
    loanAmt: number;
    loanType: String;
    date: Date;
    loanTenure: number;
    loanStatus: string;
    verStatus: string;
    feedback: string;
    loanOfficer: string;
    user: User;
}
