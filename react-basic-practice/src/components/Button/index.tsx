import React from "react";
import { Button as ChakraButton, ButtonProps, useStyleConfig } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const Button: React.FC<CustomButtonProps> = ({ label, variant, size, ...rest }) => {
  const styles = useStyleConfig("Button", { variant, size });

  return (
    <ChakraButton __css={styles} {...rest}>
      {label}
    </ChakraButton>
  );
};

export default Button;
