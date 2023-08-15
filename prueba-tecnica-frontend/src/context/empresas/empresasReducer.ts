import { Company } from '@/interfaces';
import { EmpresasState } from './';


type EmpresasActionType =
   | { type: '[Empresas] - LoadCompany', payload: Company[] }
   | { type: '[Empresas] - DeleteCompany', payload: number }
   | { type: '[Empresas] - AddCompany', payload: Company }
   | { type: '[Empresas] - EditCompany', payload: Company }


export const empresasReducer = (state: EmpresasState, action: EmpresasActionType): EmpresasState => {

   switch (action.type) {
      case '[Empresas] - LoadCompany':
         return {
            ...state,
            Empresas: action.payload
         }
      case '[Empresas] - DeleteCompany':
         return {
            ...state,
            Empresas: state.Empresas.filter(x => x.id !== action.payload)
         }
      case '[Empresas] - EditCompany':

         return {
            ...state,
            Empresas: state.Empresas.map(row => {
               if (row.id === action.payload.id) {
                  return {
                     ...action.payload
                  }
               }
               return row
            })
         }
      case '[Empresas] - AddCompany':
         return {
            ...state,
            Empresas: [...state.Empresas, action.payload]
         }
      default:
         return state;
   }

}