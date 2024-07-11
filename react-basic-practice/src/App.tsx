import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";
import Search from "@components/Search";
import Button from "@components/Button";
const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div style={{padding:"20px 50px"}}>
        <h1>Test SearchBar</h1>
        <Search/>
        <Button label="button 1" variant="primary"/>
        <Button label="button 3"/>
        <Button label="button 2" variant="secondary"/>
      </div>
    </ChakraProvider>
  );
};

export default App;
