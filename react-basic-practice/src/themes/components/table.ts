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
    tr: {
      th: {
        color: "riverbed",
        fontWeight: "semibold",
        fontSize: "xs",
        lineHeight: "shortest",
        letterSpacing: "tighter",
        padding: "12px 50px 12px 20px",
      },
    },
  },
  tbody: {
    td: {
      borderBottom: "none",
      whiteSpace: "nowrap",
    },
  },
});

export const Table = defineMultiStyleConfig({
  baseStyle,
});
