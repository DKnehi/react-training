import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {
    border: "1px",
    _placeholder: {
      color: "riverbed",
      fontSize: "md",
      fontWeight: "normal",
      lineHeight: "short",
    },
  },
});

const variantSearch = definePartsStyle({
  field: {
    padding: "0px 12px 0 36px",
    height: "32px",
    borderColor: "gullGray",
    _placeholder: {
      color: "gullGray",
    },
  },
});

const variantForm = definePartsStyle({
  field: {
    width: "342px",
    height: "51px",
    borderColor: "paleSky",
  },
});

const variants = {
  search: variantSearch,
  form: variantForm,
};

const defaultProps: { variant: keyof typeof variants } = {
  variant: "form",
};

export const Input = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps,
});
