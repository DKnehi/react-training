import React from "react";
import { Box, Input as ChakraInput, InputProps, Text } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  errorMessage?: string;
}

const Input: React.FC<CustomInputProps> = ({ errorMessage, ...rest }) => {
  return (
    <Box>
      <ChakraInput
        {...rest}
        borderColor={errorMessage ? "brickRed" : rest.borderColor}
        _hover={{
          borderColor: errorMessage ? "brickRed" : rest._hover?.borderColor,
        }}
        _focus={{
          borderColor: errorMessage ? "brickRed" : rest._focus?.borderColor,
        }}
      />
      {errorMessage && (
        <Text
          color="brickRed"
          fontSize="md"
          fontWeight="normal"
          marginTop="5px"
        >
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default Input;
