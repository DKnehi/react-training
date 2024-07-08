import { extendTheme } from "@chakra-ui/react";
import { fonts, fontSizes, fontWeights } from "./typography";
import { colors } from "./colors";
import { borderRadius } from "./metrics";

const theme = extendTheme({
  fonts,
  fontSizes,
  fontWeights,
  colors,
  borderRadius,
});

export default theme;
