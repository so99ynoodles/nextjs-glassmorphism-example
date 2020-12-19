import { useRouter } from 'next/router';
import { ChakraProvider } from "@chakra-ui/react"
import { createTheme } from "../styles/theme"
import { useMemo } from 'react';
import { AvailableLocale } from '../lib/locale';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const theme = useMemo(() => createTheme(locale as AvailableLocale), [locale])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
