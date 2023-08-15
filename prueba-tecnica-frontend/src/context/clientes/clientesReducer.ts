import { Clientes } from '@/interfaces';
import { ClientesState } from './';


type ClientesActionType =
   | { type: '[Clientes] - LoadClientes', payload: Clientes[] }
   | { type: '[Clientes] - DeleteClientes', payload: number }
   | { type: '[Clientes] - AddClientes', payload: Clientes }
   | { type: '[Clientes] - EditClientes', payload: Clientes }


export const ClientesReducer = (state: ClientesState, action: ClientesActionType): ClientesState => {

   switch (action.type) {
      case '[Clientes] - LoadClientes':
         return {
            ...state,
            Clientes: action.payload
         }
      case '[Clientes] - DeleteClientes':
         return {
            ...state,
            Clientes: state.Clientes.filter(x => x.id !== action.payload)
         }
      case '[Clientes] - EditClientes':

         return {
            ...state,
            Clientes: state.Clientes.map(row => {
               if (row.id === action.payload.id) {
                  return {
                     ...action.payload,
                   
                  }
               }
               return row
            })
         }
      case '[Clientes] - AddClientes':
         return {
            ...state,
            Clientes: [...state.Clientes, action.payload]
         }
      default:
         return state;
   }

}