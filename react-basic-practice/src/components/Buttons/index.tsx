import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { borderRadius } from "../../themes/metrics";

interface CustomButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline";
}

const padding = {
  primary: "17px 67px",
  secondary: "6px 12px",
};

const lineHeight = {
  primary: "16.94px",
  secondary: "20px",
};

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const commonStyles = {
    height: "none",
    border: "none",
    color: "white",
    bg: "royalBlueLight",
    fontSize: "s",
    fontWeight: "medium",
    borderRadius: borderRadius.xxs,
    padding: padding.primary,
    lineHeight: lineHeight.primary,
  };

  let variantStyles;

  switch (variant) {
    case "primary":
      variantStyles = {
        fontWeight: "bold",
        _hover: { bg: "royalBlue" },
      };
      break;
    case "secondary":
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
    case "outline":
      variantStyles = {
        borderRadius: borderRadius.xs,
        padding: padding.secondary,
        lineHeight: lineHeight.secondary,
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 0px 1px #2264E6, 0px 2px 5px rgba(34, 100, 230, 0.12), inset 0px 1px 0px #4B85FA",
        _hover: { bg: "royalBlue" },
      };
  }

  return (
    <Button {...commonStyles} {...variantStyles} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
