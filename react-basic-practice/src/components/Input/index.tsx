import React from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

const Input: React.FC<InputProps> = ({ ...rest }) => {

  return (
    <ChakraInput {...rest} />
  );
};

export default Input;
