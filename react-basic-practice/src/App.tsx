import React from "react";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "@themes";
import { Table, TableStatus, TablePrice } from "@components";
import { ICustomerColumn, ICustomer } from "@types";

const App: React.FC = () => {
  const data: ICustomer[] = [
    {
      name: "Ann Culhane",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      status: "Open",
      rate: "$70.00",
      balance: "-$270.00",
      deposit: "$500.00",
      id: 1,
    },
    {
      name: "user name",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      status: "Paid",
      rate: "$70.00",
      balance: "$270.00",
      deposit: "$500.00",
      id: 2,
    },
    {
      name: "user name",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      status: "Due",
      rate: "$70.00",
      balance: "-$270.00",
      deposit: "$500.00",
      id: 3,
    },
    {
      name: "user name",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      status: "Inactive",
      rate: "$70.00",
      balance: "$270.00",
      deposit: "$500.00",
      id: 4,
    },
  ];

  const columns: ICustomerColumn[] = [
    {
      key: "name",
      label: "NAME",
      value: (data: ICustomer) => (
        <Box>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="short"
            letterSpacing="tight"
            color="mirage"
          >
            {data.name}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="normal"
            lineHeight="18px"
            letterSpacing="0.03em"
            color="paleSky"
          >
            {data.id}
          </Text>
        </Box>
      ),
      sortable: true,
    },
    {
      key: "description",
      label: "DESCRIPTION",
      value: (data: ICustomer) => (
        <Text
          width="318px"
          fontSize="md"
          fontWeight="normal"
          lineHeight="short"
          color="riverbed"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            WebkitBoxOverflow: "ellipsis",
          }}
        >
          {data.description}
        </Text>
      ),
    },
    {
      key: "status",
      label: "STATUS",
      value: (data: ICustomer) => <TableStatus status={data.status} />,
    },
    {
      key: "rate",
      label: "RATE",
      value: (data: ICustomer) => (
        <Box>
          <TablePrice value={data.rate}></TablePrice>
        </Box>
      ),
    },
    {
      key: "balance",
      label: "BALANCE",
      value: (data: ICustomer) => (
        <Box>
          <TablePrice value={data.balance} isBalance={true} />
        </Box>
      ),
    },
    {
      key: "deposit",
      label: "DEPOSIT",
      value: (data: ICustomer) => (
        <Box>
          <TablePrice value={data.deposit}></TablePrice>
        </Box>
      ),
    },
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
