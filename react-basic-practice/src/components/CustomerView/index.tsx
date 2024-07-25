import React from "react";
import { Box, FormLabel, Grid, GridItem, Text } from "@chakra-ui/react";
import { ICustomer } from "@types";
import TableFinance from "../TableFinance";
import TableStatus from "../TableStatus";

interface ViewCustomerProps {
  data: ICustomer;
}

const FormView: React.FC<ViewCustomerProps> = ({ data }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" rowGap="50px">
      <GridItem colSpan={1}>
        <Box>
          <FormLabel>Name</FormLabel>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="short"
            letterSpacing="tight"
            color="mirage"
          >
            {data.name}
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box width="342px">
          <FormLabel>Status</FormLabel>
          <TableStatus status={data.status} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <FormLabel>Rate</FormLabel>
          <TableFinance value={data.rate} showCurrency={false} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <FormLabel>Balance</FormLabel>
          <TableFinance value={data.balance} isBalance showCurrency={false} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <FormLabel>Deposit</FormLabel>
          <TableFinance value={data.deposit} showCurrency={false} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          <FormLabel>Description</FormLabel>
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

export default FormView;
