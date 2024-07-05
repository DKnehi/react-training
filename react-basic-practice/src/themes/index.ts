import { extendTheme } from "@chakra-ui/react";
import { typography } from "./typography";
import { colors } from "./colors";
import { borderRadius } from "./metric";
import '@fontsource/inter';

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  colors: {
    ...colors,
  },
  borderRadius,
});

export default theme;
