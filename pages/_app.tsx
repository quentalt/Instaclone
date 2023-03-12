import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from "@/Context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthContextProvider>
  <ChakraProvider>
  <Component {...pageProps} />
    </ChakraProvider>
      </AuthContextProvider>
  )
}
