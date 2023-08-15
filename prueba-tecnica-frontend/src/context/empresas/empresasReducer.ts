import { Company } from '@/interfaces';
import { EmpresasState } from './';


type EmpresasActionType = 
   | { type: '[Empresas] - LoadCompany',payload:Company[] } 


export const empresasReducer = ( state: EmpresasState, action: EmpresasActionType ): EmpresasState => {

   switch (action.type) {
      case '[Empresas] - LoadCompany':
         return {
            ...state,
            Empresas:action.payload
          }

       default:
          return state;
   }

}