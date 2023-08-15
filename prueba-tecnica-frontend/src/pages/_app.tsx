import { ClientesProvider } from '@/context/clientes'
import { EmpresasProvider } from '@/context/empresas'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmpresasProvider>
      <ClientesProvider>
        <Component {...pageProps} />
      </ClientesProvider>
    </EmpresasProvider>
  )
}
