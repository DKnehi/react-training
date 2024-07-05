import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";


const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>

      </div>
    </ChakraProvider>
  );
};

export default App;
