import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontSize: "md",
  fontWeight: "medium",
});

export const FormLabel = defineStyleConfig({
  baseStyle,
});
