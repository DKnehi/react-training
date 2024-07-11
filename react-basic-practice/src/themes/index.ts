import { extendTheme } from "@chakra-ui/react";
import { fonts, fontSizes, fontWeights } from "./typography";
import { colors } from "./colors";
import { borderRadiuses } from "./metrics";
// import { buttonStyles } from "./components/Button";

const theme = extendTheme({
  fonts,
  fontSizes,
  fontWeights,
  colors,
  borderRadiuses,

  // components: {
  //   Button: buttonStyles,
  // },
});

export default theme;
