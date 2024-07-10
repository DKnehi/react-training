import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";
import Button from "@components/Button";
import Search from "@components/Search";
const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div style={{padding:"20px 50px"}}>
        <h1>Test SearchBar</h1>
        <Search></Search>
      </div>
    </ChakraProvider>
  );
};

export default App;
