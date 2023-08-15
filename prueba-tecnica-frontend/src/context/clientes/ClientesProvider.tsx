import { FC, useEffect, useReducer, useState } from 'react';
import { ClientesContext, ClientesReducer } from './';
import {  Clientes } from '@/interfaces';
import { webApi } from '@/api';
import { AxiosError } from 'axios';
import { useNotifications } from '@/hooks/useNotiffications';

export interface ClientesState {
    Clientes: Clientes[];
}


const Clientes_INITIAL_STATE: ClientesState = {
    Clientes: [],
}


export const ClientesProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer(ClientesReducer, Clientes_INITIAL_STATE);
    const { error, success } = useNotifications();
    const [showform, setShow] = useState(false);
    const [initialForm, setInitialForm] = useState({} as Clientes)

    const setShowForm = (value: boolean) => setShow(value)

    //Cargar Listado de clientes 
    const refreshClientes = async () => {
        try {
            const { data } = await webApi.get<Clientes[]>('/client')
            dispatch({
                type: '[Clientes] - LoadClientes',
                payload: data
            })
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }

    }
    useEffect(() => {
        refreshClientes();
    }, [])

    const addClientes = async (obj: Clientes) => {

        try {
            const { data } = await webApi.post('/client', obj)

            dispatch({ type: '[Clientes] - AddClientes', payload: data })
            handleClose();
            success();
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }
    }
    const editClientes = async (obj: Clientes) => {
        try {
            const { data } = await webApi.put(`/client/${obj.id}`, obj)
            dispatch({ type: '[Clientes] - EditClientes', payload: data })
            handleClose();
            success();
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }
    }
    const deleteClientes = async (id: number) => {
        try {

            await webApi.delete(`/client/${id}`)
            dispatch({
                type: '[Clientes] - DeleteClientes',
                payload: id
            })
            success();
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }
    }

    const handleEdit = (obj: Clientes) => {

        setInitialForm({ ...obj })
        setShow(true)
    }


    const handleSave = (obj: Clientes) => {


        if ('id' in obj && obj.id !== 0) {//Si el objeto contiene un id y ese id es distinto de 0 e asume que se esta actualizando un registro
            editClientes(obj)
        } else {
            addClientes(obj)

        }
    }

    const handleClose = () => {
        setShow(false);
        const form: Clientes = {
            id: 0,
            name: '',
            address: '',
            identification: '',
            companyId: 0,
        }
        setInitialForm(form);
    }

    return (
        <ClientesContext.Provider value={{
            ...state,
            showform,
            initialForm,

            setShowForm,
            deleteClientes,
            addClientes,
            handleSave,
            handleClose,
            handleEdit

        }}>
            {children}
        </ClientesContext.Provider>
    )
};