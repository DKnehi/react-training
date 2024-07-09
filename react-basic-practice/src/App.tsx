import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";
import Button from "@components/Button";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Test Button</h1>
        <Button label="button default" />
        <Button variant="primary" label="button primary" />
        <Button variant="secondary" label="+ Add Customer" />
      </div>
    </ChakraProvider>
  );
};

export default App;
