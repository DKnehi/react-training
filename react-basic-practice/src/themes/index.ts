import { extendTheme } from "@chakra-ui/react";
import { fonts, fontSizes, fontWeights } from "./typography";
import { colors } from "./colors";
import { borderRadiuses } from "./metrics";

const theme = extendTheme({
  fonts,
  fontSizes,
  fontWeights,
  colors,
  borderRadiuses,
});

export default theme;
