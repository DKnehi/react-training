import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@themes";
import { Dashboard } from "@pages";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  );
};

export default App;
