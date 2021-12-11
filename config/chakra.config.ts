import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Roboto", sans-serif',
  },
})

export default theme
