import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Form: React.FC = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" rowGap="20px" columnGap="30px">
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl width="342px">
          <FormLabel>Status</FormLabel>
          <Select placeholder="Select status">
            <option value="open">Open</option>
            <option value="paid">Paid</option>
            <option value="inactive">Inactice</option>
            <option value="due">Due</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Rate</FormLabel>
          <Input placeholder="$" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Balance</FormLabel>
          <Input placeholder="$" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Deposit</FormLabel>
          <Input placeholder="$" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Description" />
        </FormControl>
      </GridItem>
    </Grid>
  );
};

export default Form;
