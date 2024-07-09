import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Test Button</h1>
        <Button variant='default' children='primary button'/>
        <Button variant='primary' children='button'/>
        <Button variant='secondary' children='+ Add Customer'/>
      </div>
    </ChakraProvider>
  );
}

export default App;
