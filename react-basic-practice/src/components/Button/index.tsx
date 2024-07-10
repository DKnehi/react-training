import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export interface CustomButtonProps extends ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
}

const padding = {
  primary: "17px 67px",
  secondary: "6px 12px",
};

const lineHeight = {
  primary: "16.94px",
  secondary: "20px",
};

const Button: React.FC<CustomButtonProps> = ({
  variant,
  label
}) => {
  const commonStyles = {
    height: "none",
    border: "none",
    color: "white",
    bg: "royalBlueLight",
    fontSize: "s",
    fontWeight: "medium",
    borderRadiuses: "xxs",
    padding: padding.primary,
    lineHeight: lineHeight.primary,
    _hover: { bg: "royalBlue" },
  };

  let variantStyles;

  switch (variant) {
    case "primary":
      variantStyles = {
        bg: "none",
        color: "brickRed",
        border: "1px solid",
        borderColor: "brickRed",
        _hover: {
          bg: "brickRed",
          color: "white",
        },
      };
      break;
    case "secondary":
      variantStyles = {
        borderRadiuses: "xs",
        padding: padding.secondary,
        lineHeight: lineHeight.secondary,
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 0px 1px #2264E6, 0px 2px 5px rgba(34, 100, 230, 0.12), inset 0px 1px 0px #4B85FA",
      };
      break;
    default:
      variantStyles = {
        fontWeight: "bold",
      };
  }

  return (
    <ChakraButton {...commonStyles} {...variantStyles}>
      {label}
    </ChakraButton>
  );
};

export default Button;
