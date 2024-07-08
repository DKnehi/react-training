import React from 'react';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";


const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Test Font</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
