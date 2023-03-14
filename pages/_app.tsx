import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from "@/Context/AuthContext";
import theme from "@/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthContextProvider>
  <ChakraProvider theme={theme}>
  <Component {...pageProps} />
    </ChakraProvider>
      </AuthContextProvider>
  )
}
