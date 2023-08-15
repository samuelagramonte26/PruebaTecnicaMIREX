import { Company } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
    Empresas: Company[];
}


export const EmpresasContext = createContext({} as ContextProps );