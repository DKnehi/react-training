import React from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  variant?: "search";
}

const Input: React.FC<CustomInputProps> = ({ variant, ...rest }) => {
  let inputStyles = {};

  switch (variant) {
    case "search":
      inputStyles = {
        padding: "0px 12px 0 36px",
        height: "32px",
        borderRadiuses: "xs",
        borderColor: "gullGray",
        _hover: {
          borderColor: "none",
          boxShadow: "none",
        },
        _focus: {
          borderColor: "gullGray",
          boxShadow: "none",
        },
        _placeholder: {
          color: "gullGray",
          fontSize: "s",
          fontWeight: "regular",
        },
      };
      break;
    default:
      inputStyles = {};
  }

  return (
    <ChakraInput {...inputStyles} {...rest} />
  ) 
};

export default Input;
