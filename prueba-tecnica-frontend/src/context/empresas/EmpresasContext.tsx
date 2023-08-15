import { Company } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
    Empresas: Company[];
    showform: boolean,
    initialForm:Company

    setShowForm: (value: boolean) => void
    deleteCompany: (id: number) => void
    addCompany: (obj:Company) => void
    handleEdit: (obj:Company) => void
    handleClose:()=>void
    handleSave:(obj:Company)=>void
}


export const EmpresasContext = createContext({} as ContextProps);