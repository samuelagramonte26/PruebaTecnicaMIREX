import { EmpresasProvider } from '@/context/empresas'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmpresasProvider>

      <Component {...pageProps} />
    </EmpresasProvider>
  )
}
