import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@themes";
import { Table } from "@components";
import { columns } from "@constants";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        {/* TO DO: I imported it here just to see its demo, I will update it later*/}
        <Table columns={columns}></Table>
      </Box>
    </ChakraProvider>
  );
};

export default App;
