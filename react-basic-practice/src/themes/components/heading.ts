import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontFamily: "heading",
  fontWeight: "medium",
});

const sizes = {
  xs: defineStyle({
    fontSize: "md",
  }),
};

export const Heading = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xs",
  },
});
