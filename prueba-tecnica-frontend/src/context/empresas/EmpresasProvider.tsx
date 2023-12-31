import { FC, useEffect, useReducer, useState } from 'react';
import { EmpresasContext, empresasReducer } from './';
import { Company } from '@/interfaces';
import { webApi } from '@/api';
import { AxiosError, isAxiosError } from 'axios';
import { useNotifications } from '@/hooks/useNotiffications';

export interface EmpresasState {
    Empresas: Company[];
}


const Empresas_INITIAL_STATE: EmpresasState = {
    Empresas: [],
}


export const EmpresasProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer(empresasReducer, Empresas_INITIAL_STATE);
    const { error, success } = useNotifications();
    const [showform, setShow] = useState(false);
    const [initialForm, setInitialForm] = useState({} as Company)

    const setShowForm = (value: boolean) => setShow(value)

    //Cargar listado de empresas
    const refreshCompany = async () => {
        try {
            const { data } = await webApi.get<Company[]>('/company')
            dispatch({
                type: '[Empresas] - LoadCompany',
                payload: data
            })
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }

    }
    useEffect(() => {
        refreshCompany();
    }, [])

    const addCompany = async (obj: Company) => {
        try {
            const { data } = await webApi.post('/company', obj)

            dispatch({ type: '[Empresas] - AddCompany', payload: data })
            handleClose();
            success();
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }
    }
    const editCompany = async (obj: Company) => {
        try {
            const { data } = await webApi.put(`/company/${obj.id}`, obj)
            dispatch({ type: '[Empresas] - EditCompany', payload: data })
            handleClose();
            success();
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }
    }
    const deleteCompany = async (id: number) => {
        try {

            await webApi.delete(`/company/${id}`)
            dispatch({
                type: '[Empresas] - DeleteCompany',
                payload: id
            })
            success();
        } catch (err) {
            const errors = err as AxiosError | Error
            error(errors.message)
        }
    }

    const handleEdit = (obj: Company) => {

        setInitialForm({ ...obj })
        setShow(true)
    }
    const handleSave = (obj: Company) => {

        if ('id' in obj && obj.id !== 0) {//Si el objeto contiene un id y ese id es distinto de 0 e asume que se esta actualizando un registro
            editCompany(obj)
        } else {
            addCompany(obj)

        }
    }

    const handleClose = () => {
        setShow(false);
        const form: Company = {
            id: 0,
            name: '',
            address: '',
            phone: '',
            rnc: '',
            clients: []
        }
        setInitialForm(form);
    }

    return (
        <EmpresasContext.Provider value={{
            ...state,
            showform,
            initialForm,

            setShowForm,
            deleteCompany,
            addCompany,
            handleSave,
            handleClose,
            handleEdit

        }}>
            {children}
        </EmpresasContext.Provider>
    )
};