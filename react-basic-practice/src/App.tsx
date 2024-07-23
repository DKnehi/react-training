import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@themes";
import { Dashboard } from "@pages";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      {/* TO DO: I imported it here just to see its demo, I will update it later*/}
      <Dashboard />
    </ChakraProvider>
  );
};

export default App;
