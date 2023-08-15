import { Clientes } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
    Clientes: Clientes[];
    showform: boolean,
    initialForm:Clientes

    setShowForm: (value: boolean) => void
    deleteClientes: (id: number) => void
    addClientes: (obj:Clientes) => void
    handleEdit: (obj:Clientes) => void
    handleClose:()=>void
    handleSave:(obj:Clientes)=>void
}


export const ClientesContext = createContext({} as ContextProps);