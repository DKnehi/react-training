import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  border: "none",
  color: "white",
  bg: "royalBlueLight",
  fontSize: "sm",
  fontWeight: "medium",
  borderRadius: "sm",
  lineHeight: "shorter",
  _hover: {
    bg: "royalBlue",
  },
});

const variantPrimary = defineStyle({
  fontWeight: "semibold",
});

const variantSecondary = defineStyle({
  bg: "none",
  color: "brickRed",
  border: "1px",
  borderColor: "brickRed",
  _hover: {
    bg: "brickRed",
    color: "white",
  },
});

const variantShadow = defineStyle({
  borderRadius: "base",
  lineHeight: "short",
  boxShadow:
    "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 0px 1px #2264E6, 0px 2px 5px rgba(34, 100, 230, 0.12), inset 0px 1px 0px #4B85FA",
});

const variants = {
  primary: variantPrimary,
  secondary: variantSecondary,
  shadow: variantShadow,
};

const sizes = {
  sm: defineStyle({
    h: "auto",
    px: "67px",
    py: "17px",
    
  }),
  md: defineStyle({
    h: "auto",
    px: "12px",
    py: "6px",
  }),
};

const defaultProps: { variant: keyof typeof variants } = {
  variant: "primary",
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
