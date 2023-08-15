import { Company } from ".";

export interface Clientes{
    id: number;
    name: string;
    identification: string;
    address: string;
    companyId: number | string;
    company?:Company
}
