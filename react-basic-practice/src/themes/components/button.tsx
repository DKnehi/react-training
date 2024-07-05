import { ComponentStyleConfig } from "@chakra-ui/react";
import { colors, borderRadius, fontSizes, fontWeights } from "../variables";

const Button: ComponentStyleConfig = {
  baseStyle: {
    border: "none",
    color: colors.white,
    backgroundColor: colors.royalblue,
    padding: "10px 21px",
    borderRadius: borderRadius.xxs,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.s,
    lineHeight: "16.94px",
  },
};

export default Button;
