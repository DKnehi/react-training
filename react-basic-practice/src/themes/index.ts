import { components } from "./components"
import { foundations } from "./foundations"

export const theme = {
  ...foundations,
  components,

}

export type Theme = typeof theme

export const baseTheme = {
  components: {},
  ...foundations,
}