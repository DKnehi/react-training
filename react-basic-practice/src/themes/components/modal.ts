import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleHeader = defineStyle({
  padding: "23px 0 18px 0",
  borderBottom: "1px solid black",
  fontWeight: "semibold",
  fontSize: "lg",
  color: "mirage",
});

const baseStyleBody = defineStyle({
  padding: "19px 0 45px 0",
});

const baseStyleFooter = defineStyle({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: "13px",
  padding: "0 0 27px 0",
});

const baseStyle = definePartsStyle({
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
});

export const Modal = defineMultiStyleConfig({
  baseStyle,
});
