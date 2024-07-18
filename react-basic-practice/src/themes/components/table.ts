import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  table: {
    width: "full",
  },
  thead: {
    backgroundColor: "linkWater",
    th: {
      color: "riverbed",
      fontWeight: "semibold",
      fontSize: "xs",
      lineHeight: "shortest",
      letterSpacing: "tighter",
    },
  },
  tbody: {
    td: {
      borderBottom: "none",
    },
  },
});

export const Table = defineMultiStyleConfig({
  baseStyle,
});
