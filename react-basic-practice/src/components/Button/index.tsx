import React from "react";
import { Button as ChakraButton, ButtonProps, useStyleConfig } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const Button: React.FC<CustomButtonProps> = ({ label, ...rest }) => {

  return (
    <ChakraButton {...rest}>
      {label}
    </ChakraButton>
  );
};

export default Button;
