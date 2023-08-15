import { Clientes } from ".";

export interface Company {
    id: number;
    name: string;
    address: string;
    phone: string;
    rnc: string;
    clients: Clientes[];
}
