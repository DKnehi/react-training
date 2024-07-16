import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes";
import Button from "@components/Button";
import Search from "@components/Search";
import Input from "@components/Input";
const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <h1>Button Group</h1>
        <Button label="Create" size="sm"/>
        <Button label="+ Add Customer" variant="shadow" size="md"/>
        <Button label="Close" variant="secondary" size="sm"/>

        <h1>Search Group</h1>
        <Search/>
      </div>
    </ChakraProvider>
  );
};

export default App;
