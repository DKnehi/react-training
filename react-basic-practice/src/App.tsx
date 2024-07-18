import React from "react";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "@themes";
import { Table } from "@components";
import { ICustomerColumn, ICustomer } from "@types";
const App: React.FC = () => {
  const data: ICustomer[] = [
    {
      name: "user name",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod culpa unde dignissimos in...",
      status: "status 1",
      rate: 100,
      balance: 100,
      deposit: 100,
      id: 1,
    },
  ];

  const columns: ICustomerColumn[] = [
    {
      key: "name",
      label: "NAME",
      value: (data: ICustomer) => {
        return (
          <Box>
            <Text>{data.name}</Text>
            <Text>{data.id}</Text>
          </Box>
        );
      },
      sortable: true,
    },
    {
      key: "description",
      label: "DESCRIPTION",
      value: (data: ICustomer) => {
        return (
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            delectus dolor voluptatibus commodi sit...
          </Text>
        );
      },
    },
    { key: "status", label: "STATUS", value: () => <Text>Lorem,</Text> },
    { key: "rate", label: "RATE", value: () => <Text>Lorem,</Text> },
    { key: "balance", label: "BALANCE", value: () => <Text>Lorem,</Text> },
    { key: "deposit", label: "DEPOSIT", value: () => <Text>Lorem,</Text> },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box>
        {/* TO DO: I imported it here just to see its demo, I will update it later*/}
        <Table columns={columns} data={data} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
