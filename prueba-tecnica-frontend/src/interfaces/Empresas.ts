import { Clientes } from ".";

export interface Company {
    Id: number;
    Name: string;
    Address: string;
    Phone: string;
    RNC: string;
    Clients: Clientes[];
}
