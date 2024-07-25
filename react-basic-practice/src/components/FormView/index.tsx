import React from "react";
import { FormControl, FormLabel, Grid, GridItem, Text } from "@chakra-ui/react";
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
        <FormControl>
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
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl width="342px">
          <FormLabel>Status</FormLabel>
          <TableStatus status={data.status} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Rate</FormLabel>
          <TableFinance value={data.rate} showCurrency={false} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Balance</FormLabel>
          <TableFinance value={data.balance} isBalance showCurrency={false} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Deposit</FormLabel>
          <TableFinance value={data.deposit} showCurrency={false} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
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
        </FormControl>
      </GridItem>
    </Grid>
  );
};

export default FormView;
