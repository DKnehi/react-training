import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./themes";
import CustomerTable from "./components/Table/customtable";
const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        {/* TO DO: I imported it here just to see its demo, I will update it later*/}
        <CustomerTable></CustomerTable>
      </Box>
    </ChakraProvider>
  );
};

export default App;
