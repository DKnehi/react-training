import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleMenu = defineStyle({});

const baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
});

const baseStyleList = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  minWidth: "none",
});

const baseStyleItem = defineStyle({
  flexDirection: "row-reverse",
  padding: "4px 16px",
  width: "120px",
  fontWeight: "medium",
  fontSize: "md",
  lineHeight: "short",
  letterSpacing: "tight",
  color: "royalBlueLight",
});

const baseStyleIcon = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginInlineEnd: "none",
  WebkitMarginEnd: "0",
});

const baseStyle = definePartsStyle({
  menu: baseStyleMenu,
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  icon: baseStyleIcon,
});

export const Menu = defineMultiStyleConfig({
  baseStyle,
});
