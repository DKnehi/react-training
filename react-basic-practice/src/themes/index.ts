import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './components/button'
import { foundations } from './foundations'
import { inputTheme } from './components/input'

export const theme = extendTheme({
  ...foundations,
  components: { 
    Button: buttonTheme,
    Input: inputTheme,
   },
})
