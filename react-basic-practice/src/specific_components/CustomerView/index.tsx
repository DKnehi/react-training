import React from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { ICustomer } from "@types";
import { TableFinance, TableStatus } from "@components";

interface ViewCustomerProps {
  data: ICustomer;
}

const CustomerView: React.FC<ViewCustomerProps> = ({ data }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" rowGap="50px">
      <GridItem colSpan={1}>
        <Box>
          <Heading>Name</Heading>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="short"
            letterSpacing="tight"
            color="mirage"
            width="300px"
          >
            {data.name}
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box width="342px">
          <Heading>Status</Heading>
          <TableStatus status={data.status} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <Heading>Rate</Heading>
          <TableFinance value={data.rate} showCurrency={false} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <Heading>Balance</Heading>
          <TableFinance value={data.balance} isBalance showCurrency={false} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <Heading>Deposit</Heading>
          <TableFinance value={data.deposit} showCurrency={false} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <Heading>Description</Heading>
          <Text
            width="318px"
            fontSize="md"
            fontWeight="normal"
            lineHeight="short"
            color="riverbed"
          >
            {data.description}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CustomerView;
