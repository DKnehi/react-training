import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './components/button'
import { foundations } from './foundations'

export const theme = extendTheme({
  ...foundations,
  components: { Button: buttonTheme },
})