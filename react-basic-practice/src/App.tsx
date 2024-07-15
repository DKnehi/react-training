import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes";
import Button from "@components/Button";
const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div style={{padding:"20px 50px"}}>
        <h1>Test Button</h1>
        <Button label="Create" variant="primary" size="sm"/>
        <Button label="+ Add Customer" variant="addcustomer" size="md"/>
        <Button label="Close" variant="secondary" size="sm"/>
      </div>
    </ChakraProvider>
  );
};

export default App;
