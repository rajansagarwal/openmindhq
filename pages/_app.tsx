import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/cabin'
import "@fontsource/alegreya-sans"
import "@fontsource/alatsi"
import "@fontsource/work-sans"
import "@fontsource/libre-baskerville"
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


const theme = extendTheme({
  fonts: {
    cabin: 'Cabin',
    body: 'Alatsi',
    worksans: 'Work Sans',
    button: 'Cabin', 
    paragraph: 'alegreya sans',
    fancy: 'Libre Baskerville'
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>

     <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </div>
  )
}

export default MyApp