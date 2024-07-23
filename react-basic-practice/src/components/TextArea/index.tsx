import React from "react";
import {
  Box,
  Textarea as ChakraTextarea,
  TextareaProps,
  Text,
} from "@chakra-ui/react";

interface CustomTextareaProps extends TextareaProps {
  errorMessage?: string;
}

const Textarea: React.FC<CustomTextareaProps> = ({ errorMessage, ...rest }) => {
  return (
    <Box>
      <ChakraTextarea
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
        <Text color="brickRed" fontSize="md" fontWeight="normal" marginTop="5px">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default Textarea;
