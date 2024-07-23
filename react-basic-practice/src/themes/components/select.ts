import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { Input } from "./input";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleField = defineStyle({
  ...Input.variants?.form.field,
});

const baseStyle = definePartsStyle({
  field: baseStyleField,
});

export const Select = defineMultiStyleConfig({
  baseStyle,
});
