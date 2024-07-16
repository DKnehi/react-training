import React from "react";
import { Input as ChakraInput, InputProps, useStyleConfig } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {

}

const Input: React.FC<CustomInputProps> = ({ ...rest }) => {

  return (
    <ChakraInput {...rest} />
  );
};

export default Input;
