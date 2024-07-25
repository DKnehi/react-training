import React from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Textarea,
} from "@chakra-ui/react";
import Input from "../Input";
import { ICustomer } from "@types";

interface CustomerFormProps {
  data?: ICustomer;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ data }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" rowGap="20px" columnGap="30px">
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={data?.name} placeholder="Name" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl width="342px">
          <FormLabel>Status</FormLabel>
          <Select value={data?.status}>
            <option value="open">Open</option>
            <option value="paid">Paid</option>
            <option value="inactive">Inactive</option>
            <option value="due">Due</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Rate</FormLabel>
          <Input value={data?.rate} placeholder="$" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Balance</FormLabel>
          <Input value={data?.balance} placeholder="$" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Deposit</FormLabel>
          <Input value={data?.deposit} placeholder="$" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea value={data?.description} />
        </FormControl>
      </GridItem>
    </Grid>
  );
};

export default CustomerForm;
