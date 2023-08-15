import { FC, useEffect, useReducer } from 'react';
import { EmpresasContext, empresasReducer } from './';
import { Company } from '@/interfaces';
import { webApi } from '@/api';

export interface EmpresasState {
    Empresas: Company[];
}


const Empresas_INITIAL_STATE: EmpresasState = {
    Empresas: [],
}


export const EmpresasProvider = ({ children }:{ children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer( empresasReducer , Empresas_INITIAL_STATE );

    const refreshCompany = async () => {
       try {
        const { data } = await webApi.get<Company[]>('/company')
        dispatch({
            type: '[Empresas] - LoadCompany',
            payload: data
        })
       } catch (error) {
        console.log(error);
        
       }

    }
    useEffect(()=>{
        refreshCompany();
    },[])

    return (
        <EmpresasContext.Provider value={{
           ...state
        }}>
            { children }
        </EmpresasContext.Provider>
    )
};