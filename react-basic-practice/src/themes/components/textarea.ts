import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { Input } from "./input";

const baseStyle = defineStyle({
  ...Input.variants?.form.field,
  height: "107px",
  borderColor: "paleSky",
});

export const Textarea = defineStyleConfig({
  baseStyle,
});
