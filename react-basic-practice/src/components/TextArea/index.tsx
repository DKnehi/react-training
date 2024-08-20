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

const TextArea: React.FC<CustomTextareaProps> = ({ errorMessage, ...rest }) => {
  return (
    <Box>
      <ChakraTextarea
        {...rest}
        borderColor={errorMessage ? "brickRed" : "paleSky"}
        isInvalid={false}
        _focusVisible={{}}
        _hover={{
          borderColor: errorMessage ? "brickRed" : "paleSky",
        }}
        _focus={{
          borderColor: errorMessage ? "brickRed" : "paleSky",
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

export default TextArea;
