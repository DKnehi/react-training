import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";
import CustomButton from './components/Buttons';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Test Button</h1>
        <CustomButton variant="primary">Create</CustomButton>
        <CustomButton variant="secondary">Edit</CustomButton>
        <CustomButton variant="outline">+ Add customer</CustomButton>
      </div>
    </ChakraProvider>
  );
}

export default App;
